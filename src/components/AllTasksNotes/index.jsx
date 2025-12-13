import styles from "./index.module.scss";
import { Grid } from "../images/icons";

const AllTasksNotes = () => {
	const icon = {
		color: "#DBDDE1",
	};
	return (
		<div className={styles.allTaskNotes}>
			<div className={styles.allTaskNotesHead}>
				<Grid style={icon} />
				<h1>All</h1>
			</div>

			<div className={styles.taskCount}>4</div>
		</div>
	);
};

export default AllTasksNotes;
