import styles from "./index.module.scss";
import { Hash } from "../images/icons";

const ProjectsTechUpgrade = () => {
	return (
		<div className={styles.projectItem}>
			<div className={styles.left}>
				<Hash className={`${styles.icon} ${styles.iconBlue}`} />
				<span className={styles.title}>Tech-Upgrade</span>
			</div>
			<span className={styles.count}>4</span>
		</div>
	);
};

export default ProjectsTechUpgrade;
