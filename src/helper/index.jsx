import { useState, useEffect } from "react";
import supabase from "./supabaseClient";
import {
	fetchTodos as fetchTodosService,
	insertTodo,
	removeTodo,
	updateTodoTitle,
	markTodoComplete,
} from "../services/todosServices";

const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	// FUnction to make timezone wont change the data, keep local midnight
	const toLocaleMidnight = (dateStr) => {
		const [y, m, d] = dateStr.split("_").map(Number);
		return new Date(y, m - 1, d, 0, 0, 0, 0);
	};

	const fetchTodos = async () => {
		setLoading(true);

		try {
			const data = await fetchTodosService();
			setTodos(data);
		} catch (err) {
			console.error("Error fetching todos:", err);
		} finally {
			setLoading(false);
		}
	};

	// Use Realtime updates instead of manual fetching in children
	useEffect(() => {
		fetchTodos();

		// Subscribe to any database changes
		const channel = supabase
			.channel("public-todos-channel")
			.on(
				"postgres_changes",
				{ event: "*", schema: "public", table: "todos" },
				(payload) => {
					console.log("REALTIME EVENT FIRED:", payload);
					fetchTodos();
				}
				// () => fetchTodos() // This automatically runs when data changes anywhere
			)
			.subscribe();

		return () => supabase.removeChannel(channel);
	}, []);

	// ADD
	const addTodo = async (title, description, date) => {
		const due_at =
			typeof date === "string" && date.length === 10
				? toLocaleMidnight(date)
				: new Date(date);

		try {
			await insertTodo({ title, description, due_at });
			await fetchTodos();
		} catch (error) {
			console.error("Error adding todo:", error);
		}
	};

	//DELETE
	const deleteTodo = async (id) => {
		try {
			await removeTodo(id);
			await fetchTodos();
		} catch (error) {
			console.error("Error deleting todo:", error);
		}
	};
	// UPDATE
	const updateTodo = async (id, newTitle) => {
		if (!newTitle) return;

		try {
			await updateTodoTitle(id, newTitle);
			await fetchTodos();
		} catch (error) {
			console.error("Error updating todo:", error);
		}
	};

	// COMPLETE
	const completeTodo = async (id) => {
		try {
			await markTodoComplete(id);
			await fetchTodos();
		} catch (error) {
			console.error("Error completing todo:", error);
		}
	};

	return { todos, loading, addTodo, deleteTodo, updateTodo, completeTodo };
};

export default useTodos;
