import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";
import { isValidISODateString, isWithinFiveYears } from "../todos/utils/date";
import {
	fetchTodos as fetchTodosService,
	insertTodo,
	removeTodo,
	updateTodo as updateTodoService,
	markTodoComplete,
} from "../../services/todosServices";

const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

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
				},
				// () => fetchTodos() // This automatically runs when data changes anywhere
			)
			.subscribe();

		return () => supabase.removeChannel(channel);
	}, []);

	// ADD
	const addTodo = async (title, description, date) => {
		const cleanTitle = title?.trim();
		if (!cleanTitle) return { ok: false, error: "Title is required" };
		if (!date) return { ok: false, error: "Due date is required" };

		if (!isValidISODateString(date)) {
			return { ok: false, error: "Invalid date (use YYYY-MM-DD)" };
		}
		if (!isWithinFiveYears(date)) {
			return { ok: false, error: "Due date must be within 5 years of today" };
		}

		try {
			await insertTodo({ title: cleanTitle, description, due_on: date });
			await fetchTodos();
			return { ok: true };
		} catch (error) {
			console.error("Error adding todo:", error);
			return { ok: false, error: "Failed to add todo" };
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
	const updateTodo = async (id, updates) => {
		if (!updates || typeof updates !== "object") {
			return { ok: false, error: "Invalid updates payload" };
		}

		// If due_on is present, validate or clear
		if ("due_on" in updates) {
			if (updates.due_on === "") {
				updates.due_on = null; // Option 1: clear date
			} else if (updates.due_on != null) {
				if (!isValidISODateString(updates.due_on)) {
					return { ok: false, error: "Invalid date (use YYYY-MM-DD)" };
				}
				if (!isWithinFiveYears(updates.due_on)) {
					return {
						ok: false,
						error: "Due date must be within 5 years of today",
					};
				}
			}
		}

		try {
			await updateTodoService(id, updates);
			await fetchTodos();
			return { ok: true };
		} catch (error) {
			console.log("Error updating todo:", error);
			return { ok: false, error: "Failed to update todo" };
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
