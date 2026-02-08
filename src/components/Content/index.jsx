import styles from "./index.module.scss";
import Sidebar from "../../components/Sidebar";

const Content = ({ children, onAddTaskClick }) => {
	return (
		<div className={styles.content}>
			<Sidebar onAddTaskClick={onAddTaskClick} />

			<div className={styles.mainWrapper}>
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	);
};

export default Content;
