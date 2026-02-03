import styles from "./index.module.scss";
import { Menu } from "../images/icons";

const Tasks = () => {
	return (
		<div className={styles.tasks}>
			<div className={styles.tasksHead}>
				<Menu className={styles.icon} />
				<span className={styles.label}>Tasks</span>
			</div>

			<div className={styles.taskCount}>4</div>
		</div>
	);
};

export default Tasks;
