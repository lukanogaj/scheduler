import supabase from "../helper/supabaseClient";
import { useState, useEffect } from "react";
const useTodos = () => {
	const [title, setTitle] = useState("");
	const [todos, setTodos] = useState([]);
	const [date, setDate] = useState("");

	// Function to fetch the data from database
	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		const { data, error } = await supabase
			.from("todos")
			.select("*")
			.order("created_at", { ascending: true });
		if (error) console.error(error);
		else setTodos(data);
	};

	// Function to add todo into database
	const addTodo = async () => {
		if (!title.trim() || !date) return;
		const due_at = new Date(`${date}`);
		const { error } = await supabase.from("todos").insert([{ title, due_at }]);
		if (error) console.error(error);
		else {
			setTitle("");
			setDate("");
			fetchTodos();
		}
	};
	return { title, todos, addTodo, fetchTodos, date };
};

export default useTodos;
