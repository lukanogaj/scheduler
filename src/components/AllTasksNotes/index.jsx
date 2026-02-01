import styles from "./index.module.scss";
import { Grid } from "../images/icons";

const AllTasksNotes = () => {
	return (
		<div className={styles.allTasksNotes}>
			<div className={styles.allTasksNotesHead}>
				<Grid className={styles.icon} />
				<span className={styles.label}>All</span>
			</div>

			<div className={styles.taskCount}>4</div>
		</div>
	);
};

export default AllTasksNotes;
