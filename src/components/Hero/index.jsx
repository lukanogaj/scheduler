import { useState } from "react";
import styles from "./index.module.scss";
import Content from "../Content";
import Sidebar from "../Sidebar";
import NewTodoHandler from "../NewTodoHandler";
import useTodos from "../../helper";

const Hero = () => {
	const { todos, deleteTodo, updateTodo, completeTodo, addTodo } = useTodos();
	const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

	const openAddTask = () => setIsAddTaskOpen(true);
	const closeAddTask = () => setIsAddTaskOpen(false);
	return (
		<div className={styles.hero}>
			<Sidebar onAddTaskClick={openAddTask} />
			<Content
				todos={todos}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
				completeTodo={completeTodo}
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

export default Hero;
