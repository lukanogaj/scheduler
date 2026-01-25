import styles from "./index.module.scss";
import Sidebar from "../../components/Sidebar";

const Content = ({ children }) => {
	return (
		<div className={styles.content}>
			<Sidebar />
			<main className={styles.main}>{children}</main>
		</div>
	);
};

export default Content;
