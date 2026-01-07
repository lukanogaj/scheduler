import styles from "./index.module.scss";
import Overdue from "../Overdue";
import TodoViewContainer from "../TodoViewContainer";
// import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
const Wrapper = ({ todos }) => {
	return (
		<div className={styles.wrapper}>
			<Overdue />
			<TodoViewContainer todos={todos} />
		</div>
	);
};

export default Wrapper;
