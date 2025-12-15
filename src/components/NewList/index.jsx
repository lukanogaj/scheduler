import styles from "./index.module.scss";
import { Plus } from "../images/icons";
import { MenuFilter } from "../images/icons";
// import { RiMenuAddLine } from "react-icons/ri";

const NewList = () => {
	const icon = {
		color: "#D3D5D9",
	};
	return (
		<div className={styles.newList}>
			<div className={styles.leftNewList}>
				<Plus style={icon} />
				<h1>New List</h1>
			</div>
			<MenuFilter style={icon} />
		</div>
	);
};

export default NewList;
