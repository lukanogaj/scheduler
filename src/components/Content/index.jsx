import styles from "./index.module.scss";
import Sidebar from "../../components/Sidebar";

const Content = ({ children }) => {
	return (
		<div className={styles.content}>
			<Sidebar />

			<div className={styles.mainWrapper}>
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	);
};

export default Content;
