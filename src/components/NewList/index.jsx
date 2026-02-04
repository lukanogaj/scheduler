import styles from "./index.module.scss";
import { Plus, MenuFilter } from "../images/icons";

const NewList = ({ onNewList, onToggle }) => {
	return (
		<div className={styles.footer}>
			<button
				className={styles.newListBtn}
				type='button'
				onClick={onNewList}>
				<Plus className={styles.icon} />
				<span className={styles.label}>New List</span>
			</button>

			<button
				className={styles.rightBtn}
				type='button'
				onClick={onToggle}
				aria-label='Sidebar menu'>
				<MenuFilter className={styles.icon} />
			</button>
		</div>
	);
};

export default NewList;
