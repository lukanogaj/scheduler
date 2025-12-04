import styles from "./index.module.scss";
import Header from "../Header";
import AddNewTodoElement from "../AddNewToDoElement";
import SearchControl from "../Controls/InputSearch";
import MyDay from "../MyDay";
import Workspace from "../Workspace";
import Projects from "../Projects";

const Sidebar = () => {
	return (
		<div className={styles.sideBar}>
			<Header />
			<AddNewTodoElement />
			<SearchControl />
			<MyDay />
			<Workspace />
			<Projects />
		</div>
	);
};

export default Sidebar;
