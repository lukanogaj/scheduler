import styles from "./index.module.scss";
import { FaPlus } from "react-icons/fa6";

const AddTaskControl = () => {
	const icon = {
		color: "#9CBDDB",
		fontSize: "3em",
	};
	return (
		<div className={styles.addTaskControl}>
			<FaPlus style={icon} />
			<h1>Add Task</h1>
		</div>
	);
};

export default AddTaskControl;
