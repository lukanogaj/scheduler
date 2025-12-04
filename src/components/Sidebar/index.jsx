import styles from "./index.module.scss";
import Header from "../Header";
import AddNewTodoElement from "../AddNewToDoElement";
import SearchControl from "../Controls/InputSearch";
import MyDay from "../MyDay";
import Workspace from "../Workspace";

const Sidebar = () => {
	return (
		<div className={styles.sideBar}>
			<Header />
			<AddNewTodoElement />
			<SearchControl />
			<MyDay />
			<Workspace />
		</div>
	);
};

export default Sidebar;
