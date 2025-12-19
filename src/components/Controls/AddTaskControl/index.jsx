import styles from "./index.module.scss";
import { Plus } from "../../images/icons";
import { useState } from "react";

const AddTaskControl = () => {
	return (
		<div className={styles.addTaskControl}>
			<Plus style={{ color: "#9Cbddb", width: 90, height: 90 }} />
			<h1>Add Task</h1>
		</div>
	);
};

export default AddTaskControl;
