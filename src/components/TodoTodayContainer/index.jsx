import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import supabase from "../../helper/supabaseClient";
import Chevron from "../Chevron";
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

	// Function to add todo into database
	const addTodo = async () => {
		if (!title.trim() || !date) return;
		const due_at = new Date(`${date}`);
		const { error } = await supabase
			.from("todos")
			.insert([{ title, due_at, description }]);
		if (error) console.error(error);
		else {
			setTitle("");
			setDate("");
			setDescription("");
			fetchTodos();
		}
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
				<h1>Today</h1>
				<Chevron
					chevronHandler={chevronHandler}
					chevron={chevron}
				/>
			</div>
			<div>
				<h1>Todo List</h1>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Add New Todo'
				/>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}></textarea>
				<input
					type='datetime-local'
					name='datetime-local'
					value={date}
					onChange={(e) => setDate(e.target.value)}
					// style={;}
				/>

				<button onClick={addTodo}>Add</button>
				{/* Filter todos */}
				<h2>Incomplete Todos</h2>
				<div>
					{todos
						.filter((t) => !t.completed)
						.map((todo) => (
							<div key={todo.id}>
								<span>{todo.title}</span>
								<button onClick={() => completeTodo(todo.id)}>Complete</button>
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
	);
};

export default TodoTodayContainer;
