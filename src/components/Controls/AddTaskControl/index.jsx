import styles from "./index.module.scss";
import { Plus } from "../../images/icons";

const AddTaskControl = ({ onOpen }) => {
	return (
		<button
			type='button'
			className={styles.addTaskControl}
			onClick={onOpen}
			aria-label='Add task'>
			<span
				className={styles.iconWrap}
				aria-hidden='true'>
				<Plus className={styles.icon} />
			</span>

			<span className={styles.label}>Add Task</span>
		</button>
	);
};

export default AddTaskControl;
