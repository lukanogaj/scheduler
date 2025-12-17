import { useState } from "react";
import styles from "./index.module.scss";
import AddTaskControl from "../Controls/AddTaskControl";

const AddNewTodoElement = () => {
	const [title, setTitle] = useState("");
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [upcomingTodos, setUpcomingTodos] = useState([]);

	function handleAddTodo(e) {
		e.preventDefault();
		if (!title || !date || !time) return;

		setUpcomingTodos([
			...upcomingTodos,
			{
				id: Date.now(),
				title,
				date,
				time,
			},
		]);
		setTitle("");
		setDate("");
		setTime("");
	}

	const clearLocale = () => localStorage.clear();

	return (
		<>
			<div onClick={() => setIsFormVisible(!isFormVisible)}>
				<AddTaskControl />
			</div>
			<div className={styles.todoInput}>
				{isFormVisible && (
					<div>
						<input
							type='text'
							placeholder='Add a new task'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
						<input
							type='date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
							style={{ marginRight: "0.5rem" }}
							required
						/>
						<input
							type='time'
							value={time}
							onChange={(e) => setTime(e.target.value)}
							style={{ marginRight: "0.5rem" }}
							required
						/>
						<button
							onClick={() => {
								handleAddTodo(title);
								setTitle("");
							}}>
							Submit
						</button>
						<button onClick={() => clearLocale()}>Clear</button>
					</div>
				)}
			</div>
		</>
	);
};

export default AddNewTodoElement;
