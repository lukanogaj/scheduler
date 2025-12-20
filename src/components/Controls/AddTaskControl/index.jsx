import styles from "./index.module.scss";
import { Plus } from "../../images/icons";
import { useState } from "react";
import NewTodoHandler from "../../NewTodoHandler";

const AddTaskControl = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.addTaskControl}>
			<Plus
				style={{ color: "#9Cbddb", width: 90, height: 90 }}
				onClick={() => setIsOpen(true)}
			/>
			<h1>Add Task</h1>
			{isOpen ? <NewTodoHandler /> : null}
		</div>
	);
};

export default AddTaskControl;
