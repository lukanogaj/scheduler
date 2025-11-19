import styles from "./index.module.scss";
import Header from "../Header";
import AddNewTodoElement from "../AddNewToDoElement";
import SearchControl from "../Controls/InputSearch";

const Sidebar = () => {
	return (
		<div className={styles.sideBar}>
			<Header />
			<AddNewTodoElement />
			<SearchControl />
		</div>
	);
};

export default Sidebar;
