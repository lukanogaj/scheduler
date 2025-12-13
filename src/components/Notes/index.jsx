import styles from "./index.module.scss";
import { NotesIcon } from "../images/icons";
const Notes = () => {
	const icon = {
		color: "#DBDDE1",
		fontSize: "3em",
	};
	return (
		<div className={styles.notes}>
			<div className={styles.notesHead}>
				<Notes style={icon} />
				<h1>Notes</h1>
			</div>

			<div className={styles.notesCount}>4</div>
		</div>
	);
};

export default Notes;
