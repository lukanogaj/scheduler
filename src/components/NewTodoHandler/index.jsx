import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import supabase from "../../helper/supabaseClient";
import { Plus } from "../images/icons";
import { faLastfm } from "@fortawesome/free-brands-svg-icons";
// import useTodos from "../../hooks";

const NewTodoHandler = ({ onClose, fetchTodos }) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");
	// const [todos, setTodos] = useState([]);
	// const [isSubmitted, setIsSubmitted] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [formVisible, setFormVisible] = useState(true);

	// useEffect(() => {
	// 	fetchTodos();
	// }, []);

	// const fetchTodos = async () => {
	// 	const { data, error } = await supabase
	// 		.from("todos")
	// 		.select("*")
	// 		.order("created_at", { ascending: true });
	// 	if (error) console.error(error);
	// 	else setTodos(data);
	// };
	// Function to add todo into database
	const addTodo = async () => {
		if (!title.trim() || !date) return;
		const due_at = new Date(`${date}`);

		const { error } = await supabase
			.from("todos")
			.insert([{ title, due_at, description }]);

		if (error) {
			console.error(error);
		} else {
			setTitle("");
			setDate("");
			setDescription("");

			// IMPORTANT: Call the parent's fetch function
			await fetchTodos();

			setFormVisible(false);
			setShowSuccess(true);
		}
	};
	// const addTodo = async () => {
	// 	if (!title.trim() || !date) return;
	// 	const due_at = new Date(`${date}`);
	// 	const { error } = await supabase
	// 		.from("todos")
	// 		.insert([{ title, due_at, description }]);
	// 	if (error) console.error(error);
	// 	else {
	// 		// Reset date from the fields
	// 		setTitle("");
	// 		setDate("");
	// 		setDescription("");
	// 		// Refresh todos
	// 		fetchTodos();
	// 		// Hide form immediately
	// 		setFormVisible(false);
	// 		// Show success message
	// 		setShowSuccess(true);
	// 	}
	// };

	// Auto-hide success message AND close form after 2s
	useEffect(() => {
		if (!showSuccess) return;

		const timer = setTimeout(() => {
			setShowSuccess(false); // hide success message
			if (onClose) onClose(); // hide form
		}, 2000);

		return () => clearTimeout(timer);
	}, [showSuccess, onClose]);

	return (
		<div>
			{/* Form container */}
			{formVisible && (
				<div className={styles.newTodo}>
					<div className={styles.newTodoForm}>
						<h1>Todo-List</h1>

						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder='Add New Todo'
						/>
						<textarea
							rows='4'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder='Description'
						/>
						<input
							type='datetime-local'
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>

						<button
							className={styles.btnAddTask}
							onClick={addTodo}>
							<Plus />
							<span>Add Todo</span>
						</button>
					</div>
				</div>
			)}

			{/* Success message outside form */}
			{showSuccess && (
				<div className={styles.success}>Todo added successfully!</div>
			)}
		</div>
	);
};

export default NewTodoHandler;
