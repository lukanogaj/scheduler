import styles from "./index.module.scss";
import Overdue from "../Overdue";
import TodoContainer from "../TodoContainer";
const Wrapper = () => {
	return (
		<div className={styles.wrapper}>
			<Overdue />
			<TodoContainer />
		</div>
	);
};

export default Wrapper;
