import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import supabase from "../../helper/supabaseClient";

const NewTodoHandler = () => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");

	// Function to add todo into database
	const addTodo = async () => {
		if (!title.trim() || !date) return;
		const due_at = new Date(`${date}`);
		const { error } = await supabase.from("todos").insert([{ title, due_at }]);
		if (error) console.error(error);
		else {
			setTitle("");
			setDate("");
			// fetchTodos();
		}
	};
	return (
		<div className={styles.newTodo}>
			<div className={styles.newTodoForm}>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Add New Todo'
				/>

				<input
					type='datetime-local'
					name='datetime-local'
					value={date}
					onChange={(e) => setDate(e.target.value)}
					// style={;}
				/>

				<button onClick={addTodo}>Add</button>
			</div>
		</div>
	);
};

export default NewTodoHandler;
