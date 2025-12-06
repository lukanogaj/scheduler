import styles from "./index.module.scss";
import { FaPlus } from "react-icons/fa6";
import { RiMenuAddLine } from "react-icons/ri";

const NewList = () => {
	const icon = {
		color: "#a9acb0",
		fontSize: "3em",
	};
	return (
		<div className={styles.newList}>
			<div className={styles.leftNewList}>
				<FaPlus style={icon} />
				<h1>New List</h1>
			</div>
			<RiMenuAddLine style={icon} />
		</div>
	);
};

export default NewList;
