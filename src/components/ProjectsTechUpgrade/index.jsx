import styles from "./index.module.scss";
import { Hash } from "../images/icons";

const ProjectsTechUpgrade = () => {
	const icon = { color: "#3F8CBF" };

	return (
		<div className={styles.projectItem}>
			<div className={styles.left}>
				<Hash style={icon} />
				<span className={styles.title}>Tech-Upgrade</span>
			</div>
			<span className={styles.count}>4</span>
		</div>
	);
};

export default ProjectsTechUpgrade;
