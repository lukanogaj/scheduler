import styles from "./index.module.scss";
import { Hash } from "../images/icons";
const ProjectsTechUpgrade = () => {
	const icon = {
		color: "#3F8CBF",
	};
	return (
		<div className={styles.projectsTechUpgrade}>
			<div className={styles.leftUpgrade}>
				<Hash style={icon} />
				<h1>Tech-Upgrade</h1>
			</div>
			<div className={styles.projectsUpgradeCount}>4</div>
		</div>
	);
};

export default ProjectsTechUpgrade;
