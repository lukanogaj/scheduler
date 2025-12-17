import styles from "./index.module.scss";
import Header from "../Header";
import AddTaskControl from "../Controls/AddTaskControl";
// import AddNewTodoElement from "../AddNewToDoElement";
import SearchControl from "../Controls/InputSearch";
import MyDay from "../MyDay";
import Workspace from "../Workspace";
import Projects from "../Projects";
import NewList from "../NewList";

const Sidebar = () => {
	return (
		<div className={styles.sideBar}>
			<Header />
			<AddTaskControl />
			{/* <AddNewTodoElement /> */}
			<SearchControl />
			<MyDay />
			<Workspace />
			<Projects />
			<NewList />
		</div>
	);
};

export default Sidebar;
