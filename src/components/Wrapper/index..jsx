import styles from "./index.module.scss";
import Overdue from "../Overdue";
import TodoViewContainer from "../TodoViewContainer";
const Wrapper = () => {
	return (
		<div className={styles.wrapper}>
			<Overdue />
			<TodoViewContainer />
		</div>
	);
};

export default Wrapper;
