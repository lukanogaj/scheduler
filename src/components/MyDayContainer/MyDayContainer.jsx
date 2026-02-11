// import { useState } from "react";

// import styles from "./MyDayContainer.module.scss";

// import MyDayPage from "../../pages/MyDay";
// import NewTodoHandler from "../NewTodoHandler";

// import useTodos from "../../helper/useTodos";
// import { useOverdueTodos } from "../../features/hooks/useOverdueTodos";
// import { useTodayTodos } from "../../features/hooks/useTodayTodos";

// const MyDayContainer = () => {
// 	const { todos, deleteTodo, updateTodo, completeTodo, addTodo } = useTodos();

// 	const overdueTodos = useOverdueTodos(todos);
// 	const todayTodos = useTodayTodos(todos);

// 	const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

// 	const openAddTask = () => setIsAddTaskOpen(true);
// 	const closeAddTask = () => setIsAddTaskOpen(false);

// 	const actions = {
// 		addTodo,
// 		deleteTodo,
// 		updateTodo,
// 		completeTodo,
// 	};

// 	return (
// 		<div className={styles.myDayContainer}>
// 			<MyDayPage
// 				overdueTodos={overdueTodos}
// 				todayTodos={todayTodos}
// 				actions={actions}
// 				onOpenAddTask={openAddTask}
// 			/>

// 			{isAddTaskOpen && (
// 				<NewTodoHandler
// 					addTodo={addTodo}
// 					onClose={closeAddTask}
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default MyDayContainer;

import { useState } from "react";
import Content from "../Content";
import styles from "./MyDayContainer.module.scss";

import MyDayPage from "../../pages/MyDay";
import NewTodoHandler from "../NewTodoHandler";

import useTodos from "../../helper/useTodos";
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
				headerLeft={<h1>My Day</h1>}>
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
			</Content>
		</div>
	);
};

export default MyDayContainer;
