import styles from "./index.module.scss";
import { Plus } from "../../images/icons";
import { useState } from "react";
import NewTodoHandler from "../../NewTodoHandler";

const AddTaskControl = ({ addTodo }) => {
	console.log("AddTaskControl addTodo:", addTodo);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.addTaskControl}>
			<Plus
				style={{ color: "#9Cbddb", width: 90, height: 90 }}
				onClick={() => setIsOpen(true)}
			/>
			<h1>Add Task</h1>
			{isOpen && (
				<NewTodoHandler
					setIsOpen={setIsOpen}
					addTodo={addTodo}
					onClose={() => setIsOpen(false)}
				/>
			)}
		</div>
	);
};

export default AddTaskControl;
