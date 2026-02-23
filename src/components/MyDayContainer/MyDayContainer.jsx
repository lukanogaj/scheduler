import { useState } from "react";
import Content from "../Content/Content";
import styles from "./MyDayContainer.module.scss";

import MyDayPage from "../../pages/MyDay";
import NewTodoHandler from "../NewTodoHandler";

import useTodos from "../../features/hooks/useTodos";
import { useOverdueTodos } from "../../features/hooks/useOverdueTodos";
import { useTodayTodos } from "../../features/hooks/useTodayTodos";

const MyDayContainer = () => {
	const { todos, deleteTodo, updateTodo, completeTodo, addTodo } = useTodos();

	const overdueTodos = useOverdueTodos(todos);
	const todayTodos = useTodayTodos(todos);

	const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

	const openAddTask = () => setIsAddTaskOpen(true);
	const closeAddTask = () => setIsAddTaskOpen(false);

	const actions = {
		deleteTodo,
		updateTodo,
		completeTodo,
	};

	return (
		<div className={styles.myDayContainer}>
			<Content
				onAddTaskClick={openAddTask}
				appHeaderLeft={<h1>My Day</h1>}>
				<MyDayPage
					overdueTodos={overdueTodos}
					todayTodos={todayTodos}
					actions={actions}
				/>

				{isAddTaskOpen && (
					<NewTodoHandler
						addTodo={addTodo}
						onClose={closeAddTask}
					/>
				)}
			</Content>
		</div>
	);
};

export default MyDayContainer;
