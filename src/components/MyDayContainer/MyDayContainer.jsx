import { useState } from "react";

import styles from "./MyDayContainer.module.scss";

import MyDayPage from "../../pages/MyDay";
import NewTodoHandler from "../NewTodoHandler";

import useTodos from "../../helper";
import { useOverdueTodos } from "../../features/hooks/useOverdueTodos";
import { useTodayTodos } from "../../features/hooks/useTodayTodos";

const MyDayContainer = () => {
	// 1️⃣ Data
	const { todos, deleteTodo, updateTodo, completeTodo, addTodo } = useTodos();

	const overdueTodos = useOverdueTodos(todos);
	const todayTodos = useTodayTodos(todos);

	// 2️⃣ UI state
	const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

	// 3️⃣ Handlers
	const openAddTask = () => setIsAddTaskOpen(true);
	const closeAddTask = () => setIsAddTaskOpen(false);

	// 🔑 grouped actions (less prop noise)
	const actions = {
		addTodo,
		deleteTodo,
		updateTodo,
		completeTodo,
	};

	return (
		<div className={styles.myDayContainer}>
			<MyDayPage
				overdueTodos={overdueTodos}
				todayTodos={todayTodos}
				actions={actions}
				onOpenAddTask={openAddTask}
			/>

			{isAddTaskOpen && (
				<NewTodoHandler
					addTodo={addTodo}
					onClose={closeAddTask}
				/>
			)}
		</div>
	);
};

export default MyDayContainer;
