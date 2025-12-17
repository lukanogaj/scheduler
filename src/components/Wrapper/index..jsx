import styles from "./index.module.scss";
import Overdue from "../Overdue";
import TodoTodayContainer from "../TodoTodayContainer";
const Wrapper = () => {
	return (
		<div className={styles.wrapper}>
			<Overdue />
			<TodoTodayContainer />
		</div>
	);
};

export default Wrapper;
