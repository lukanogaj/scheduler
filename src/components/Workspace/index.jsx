import styles from "./index.module.scss";
import AllTasksNotes from "../AllTasksNotes";
import Tasks from "../Tasks";

const Workspace = () => {
	return (
		<div className={styles.workSpace}>
			<AllTasksNotes />
			<Tasks />
		</div>
	);
};

export default Workspace;
