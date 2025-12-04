import styles from "./index.module.scss";
import { IoListSharp } from "react-icons/io5";
const Tasks = () => {
	const icon = {
		color: "#DBDDE1",
		fontSize: "3em",
	};
	return (
		<div className={styles.tasks}>
			<div className={styles.tasksHead}>
				<IoListSharp style={icon} />
				<h1>Tasks</h1>
			</div>

			<div className={styles.tasksCount}>4</div>
		</div>
	);
};

export default Tasks;
