import styles from "./index.module.scss";
import { NotesIcon } from "../images/icons";

const Notes = () => {
	return (
		<div className={styles.notes}>
			<div className={styles.notesHead}>
				<NotesIcon className={styles.icon} />
				<span className={styles.label}>Notes</span>
			</div>

			<div className={styles.notesCount}>4</div>
		</div>
	);
};

export default Notes;
