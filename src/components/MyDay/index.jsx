import styles from "./index.module.scss";
import { Sun } from "../images/icons";
const MyDay = () => {
	const iconPosition = {
		color: "#9cbddb",
	};
	return (
		<div className={styles.myDay}>
			<div className={styles.myDayHead}>
				<Sun style={iconPosition} />
				<h1>My Day</h1>
			</div>

			<div className={styles.taskCount}>4</div>
		</div>
	);
};

export default MyDay;
