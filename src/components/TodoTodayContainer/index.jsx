import styles from "./index.module.scss";
import Chevron from "../Chevron";
const TodoTodayContainer = ({ chevronHandler, chevron }) => {
	return (
		<div className={styles.todoTodayContainer}>
			<div className={styles.toggleToday}>
				<h1>Today</h1>
				<Chevron
					chevronHandler={chevronHandler}
					chevron={chevron}
				/>
			</div>
		</div>
	);
};

export default TodoTodayContainer;
