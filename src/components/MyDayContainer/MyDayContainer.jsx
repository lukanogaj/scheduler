// 1️⃣ React
import { useState } from "react";

// 2️⃣ Styles
import styles from "./MyDayContainer.module.scss";

// 3️⃣ Pages / components
import MyDayPage from "../../pages/MyDay";
import NewTodoHandler from "../NewTodoHandler";

// 4️⃣ Hooks (ALL hooks together)
import useTodos from "../../helper";
import { useOverdueTodos } from "../../features/hooks/useOverdueTodos";
import { useTodayTodos } from "../../features/hooks/useTodayTodos";

const MyDayContainer = () => {
	// 1️⃣ Data hooks
	const { todos, deleteTodo, updateTodo, completeTodo, addTodo } = useTodos();
	const overdueTodos = useOverdueTodos(todos);
	const todayTodos = useTodayTodos(todos);

	// 2️⃣ UI state hooks
	const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

	// 3️⃣ Handlers
	const openAddTask = () => setIsAddTaskOpen(true);
	const closeAddTask = () => setIsAddTaskOpen(false);

	// 4️⃣ Render
	return (
		<div className={styles.myDayContainer}>
			<MyDayPage
				overdueTodos={overdueTodos}
				todayTodos={todayTodos}
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
