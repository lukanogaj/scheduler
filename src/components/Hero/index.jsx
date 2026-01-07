import styles from "./index.module.scss";
import Content from "../Content";
import Sidebar from "../Sidebar";
import useTodos from "../../helper";

const Hero = () => {
	const { todos, deleteTodo, updateTodo, completeTodo, addTodo } = useTodos();
	return (
		<div className={styles.hero}>
			<Sidebar />
			<Content />
		</div>
	);
};

export default Hero;
