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
				() => fetchTodos() // This automatically runs when data changes anywhere
			)
			.subscribe();

		return () => supabase.removeChannel(channel);
	}, []);

	// Simple CRUD functions that don't need manual fetchTodos() calls
	const addTodo = async (title, description, date) => {
		const due_at = new Date(`${date}`);
		await supabase.from("todos").insert([{ title, due_at, description }]);
		// Realtime listener handles the UI refresh automatically here
	};

	const deleteTodo = async (id) => {
		await supabase.from("todos").delete().eq("id", id);
	};

	const updateTodo = async (id, newTitle) => {
		if (!newTitle) return;
		await supabase.from("todos").update({ title: newTitle }).eq("id", id);
	};

	const completeTodo = async (id) => {
		await supabase.from("todos").update({ completed: true }).eq("id", id);
	};

	return { todos, loading, addTodo, deleteTodo, updateTodo, completeTodo };
};

export default useTodos;
