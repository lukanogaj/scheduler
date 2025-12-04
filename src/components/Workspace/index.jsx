import styles from "./index.module.scss";
import AllTasksNotes from "../AllTasksNotes";

const Workspace = () => {
	return (
		<div className={styles.workSpace}>
			<AllTasksNotes />
		</div>
	);
};

export default Workspace;
