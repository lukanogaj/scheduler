import styles from "./index.module.scss";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper/index.";
const Content = ({ todos, deleteTodo, updateTodo, completeTodo }) => {
	return (
		<div className={styles.content}>
			<Navbar />
			<Wrapper
				todos={todos}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
				completeTodo={completeTodo}
			/>
		</div>
	);
};

export default Content;
