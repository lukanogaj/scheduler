import styles from "./index.module.scss";
import Header from "../Header";

const Sidebar = () => {
	return (
		<div className={styles.sideBar}>
			<Header />
		</div>
	);
};

export default Sidebar;
