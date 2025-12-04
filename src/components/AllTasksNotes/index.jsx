import styles from "./index.module.scss";
import { TfiLayoutGrid2 } from "react-icons/tfi";
const AllTasksNotes = () => {
	const icon = {
		color: "#DBDDE1",
		fontSize: "3em",
	};
	return (
		<div className={styles.allTaskNotes}>
			<div className={styles.allTaskNotesHead}>
				<TfiLayoutGrid2 style={icon} />
				<h1>All</h1>
			</div>

			<div className={styles.taskCount}>4</div>
		</div>
	);
};

export default AllTasksNotes;
