import styles from "./index.module.scss";
import Header from "../Header";
import AddTaskControl from "../Controls/AddTaskControl";
import SearchControl from "../Controls/InputSearch";
import Workspace from "../Workspace";
import Projects from "../Projects";
import NewList from "../NewList";

const Sidebar = ({ onAddTaskClick }) => {
	return (
		<div className={styles.sideBar}>
			<Header />
			<AddTaskControl onOpen={onAddTaskClick} />
			<SearchControl />
			<Workspace />
			<Projects />
			<NewList />
		</div>
	);
};

export default Sidebar;
