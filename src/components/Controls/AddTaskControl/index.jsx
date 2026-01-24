import styles from "./index.module.scss";
import { Plus } from "../../images/icons";

const AddTaskControl = ({ onOpen }) => {
	return (
		<button
			type='button'
			className={styles.addTaskControl}
			onClick={onOpen}>
			<Plus style={{ color: "#9Cbddb", width: 90, height: 90 }} />
			<h1>Add Task</h1>
		</button>
	);
};

export default AddTaskControl;
