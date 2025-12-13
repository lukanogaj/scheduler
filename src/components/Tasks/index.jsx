import styles from "./index.module.scss";
import { Menu } from "../images/icons";
const Tasks = () => {
	const icon = {
		color: "#DBDDE1",
	};
	return (
		<div className={styles.tasks}>
			<div className={styles.tasksHead}>
				<Menu style={icon} />
				<h1>Tasks</h1>
			</div>

			<div className={styles.tasksCount}>4</div>
		</div>
	);
};

export default Tasks;
