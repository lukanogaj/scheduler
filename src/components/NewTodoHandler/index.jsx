import styles from "./index.module.scss";
import { useState, useEffect } from "react";
// import supabase from "../../helper/supabaseClient";
import { Plus } from "../images/icons";

const NewTodoHandler = ({ onClose, addTodo }) => {
	// console.log("NewTodoHandler addTodo:", addTodo);
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);
	const [formVisible, setFormVisible] = useState(true);

	const handleAddSubmit = async () => {
		if (!title.trim() || !date) return;

		console.log("NewTodoHandler date", date);
		// Call the parent's function instead of defining a new one
		await addTodo(title, description, date);

		// Reset local state and show success message
		setTitle("");
		setDate("");
		setDescription("");
		setFormVisible(false);
		setShowSuccess(true);
		// Note: Realtime handles the UI refresh automatically now.
	};

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
							type='date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>

						<button
							className={styles.btnAddTask}
							onClick={handleAddSubmit}>
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
