import styles from "./index.module.scss";
import Header from "../Header";
import AddNewTodoElement from "../AddNewToDoElement";

const Sidebar = () => {
	return (
		<div className={styles.sideBar}>
			<Header />
			<AddNewTodoElement />
		</div>
	);
};

export default Sidebar;
