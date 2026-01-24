import { useState } from "react";
import styles from "./MyDayContainer.module.scss";

import MyDayPage from "../../pages/MyDay/MyDayPage";
import NewTodoHandler from "../NewTodoHandler";
import useTodos from "../../helper";

const MyDayContainer = () => {
	const { todos, deleteTodo, updateTodo, completeTodo, addTodo } = useTodos();
	const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

	const openAddTask = () => setIsAddTaskOpen(true);
	const closeAddTask = () => setIsAddTaskOpen(false);
	return (
		<div className={styles.myDayContainer}>
			<MyDayPage
				todos={todos}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
				completeTodo={completeTodo}
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
