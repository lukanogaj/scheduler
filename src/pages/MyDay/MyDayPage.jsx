import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";
// import styles from "./MyDayPage.module.scss";

const MyDayPage = ({
	todos,
	deleteTodo,
	updateTodo,
	completeTodo,
	onOpenAddTask,
}) => {
	return (
		<>
			<Sidebar onAddTaskClick={onOpenAddTask} />
			<Content
				todos={todos}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
				completeTodo={completeTodo}
				onOpenAddTask={onOpenAddTask}
			/>
		</>
	);
};

export default MyDayPage;
