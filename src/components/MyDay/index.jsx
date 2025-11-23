import styles from "./index.module.scss";
import { BsSun } from "react-icons/bs";
const MyDay = () => {
	const iconPosition = {
		color: "#A9ACB0",
		fontSize: "3em",
	};
	return (
		<div className={styles.myDay}>
			<div className={styles.myDayHead}>
				<BsSun style={iconPosition} />
				<h1>My Day</h1>
			</div>

			<div className={styles.taskCount}>4</div>
		</div>
	);
};

export default MyDay;
