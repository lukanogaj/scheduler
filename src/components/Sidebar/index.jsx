import styles from "./index.module.scss";
import Header from "../Header";
import AddNewTodoElement from "../AddNewToDoElement";
import SearchControl from "../Controls/InputSearch";
import MyDay from "../MyDay";

const Sidebar = () => {
	return (
		<div className={styles.sideBar}>
			<Header />
			<AddNewTodoElement />
			<SearchControl />
			<MyDay />
		</div>
	);
};

export default Sidebar;
