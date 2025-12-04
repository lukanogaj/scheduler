import styles from "./index.module.scss";
import AllTasksNotes from "../AllTasksNotes";
import Tasks from "../Tasks";
import Notes from "../Notes";

const Workspace = () => {
	return (
		<div className={styles.workSpace}>
			<AllTasksNotes />
			<Tasks />
			<Notes />
		</div>
	);
};

export default Workspace;
