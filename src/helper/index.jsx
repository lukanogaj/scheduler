import { useState, useEffect } from "react";
// import supabase from "../helper/supabaseClient";
import supabase from "./supabaseClient";

const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchTodos = async () => {
		setLoading(true);
		const { data, error } = await supabase
			.from("todos")
			.select("*")
			.order("created_at", { ascending: true });
		if (error) console.error("Error fetching todos:", error);
		else setTodos(data);
		setLoading(false);
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

	// Simple CRUD functions that don't need manual fetchTodos() calls
	const addTodo = async (title, description, date) => {
		const due_at = new Date(date);
		const { error } = await supabase
			.from("todos")
			.insert([{ title, due_at, description }]);

		if (error) {
			console.error("Error adding todo:", error);
			return;
		}

		await fetchTodos();
	};

	const deleteTodo = async (id) => {
		const { error } = await supabase.from("todos").delete().eq("id", id);
		if (error) {
			console.error("Error deleting todo", error);
			return;
		}
		await fetchTodos();
	};

	const updateTodo = async (id, newTitle) => {
		if (!newTitle) return;

		const { error } = await supabase
			.from("todos")
			.update({ title: newTitle })
			.eq("id", id);
		if (error) {
			console.error("Error updating todo");
			return;
		}
		await fetchTodos();
	};

	const completeTodo = async (id) => {
		const { error } = await supabase
			.from("todos")
			.update({ completed: true })
			.eq("id", id);
		if (error) {
			console.error("Error completing todo");
			return;
		}
		await fetchTodos();
	};

	return { todos, loading, addTodo, deleteTodo, updateTodo, completeTodo };
};

export default useTodos;
