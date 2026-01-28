import styles from "./index.module.scss";
import { Plus } from "../../images/icons";

const AddTaskControl = ({ onOpen }) => {
	return (
		<button
			type='button'
			className={styles.addTaskControl}
			onClick={onOpen}>
			<Plus className={styles.icon} />
			<span className={styles.label}>Add Task</span>
		</button>
	);
};

export default AddTaskControl;
