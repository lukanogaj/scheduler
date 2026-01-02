import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import supabase from "../../helper/supabaseClient";
import TodayTodoCard from "../TodayTodoCard";
// import useTodos from "../../hooks";
const TodoTodayContainer = ({ chevronHandler, chevron }) => {
	const [todos, setTodos] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");

	// useTodos();
	//Function to fetch the data from database
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

	// Function to delete todo
	const deleteTodo = async (id) => {
		await supabase.from("todos").delete().eq("id", id);
		fetchTodos();
	};

	// Function to update todo

	const updateTodo = async (id, newTitle) => {
		await supabase.from("todos").update({ title: newTitle }).eq("id", id);
		fetchTodos();
	};
	// Completed function todo
	const completeTodo = async (id) => {
		await supabase.from("todos").update({ completed: true }).eq("id", id);
		fetchTodos();
	};
	return (
		<div className={styles.todoTodayContainer}>
			<div className={styles.toggleToday}>
				<TodayTodoCard />
				{/* Filter todos */}
				<div className={styles.incompleteTodos}>
					<h2>Incomplete Todos</h2>
					<div>
						{todos
							.filter((t) => !t.completed)
							.map((todo) => (
								<div key={todo.id}>
									<span>{todo.title}</span>
									<button onClick={() => completeTodo(todo.id)}>
										Complete
									</button>
									<button
										onClick={() =>
											updateTodo(todo.id, prompt("New title", todo.title))
										}>
										Update
									</button>
									<button onClick={() => deleteTodo(todo.id)}>Delete</button>
								</div>
							))}
					</div>
					<h2>Complete Todos</h2>
					<div>
						{todos
							.filter((t) => t.completed)
							.map((todo) => (
								<div key={todo.id}>
									<span>{todo.title}</span>
									<button onClick={() => deleteTodo(todo.id)}>Delete</button>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoTodayContainer;
