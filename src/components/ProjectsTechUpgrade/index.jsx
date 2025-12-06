import styles from "./index.module.scss";
import { LiaHashtagSolid } from "react-icons/lia";
const ProjectsTechUpgrade = () => {
	const icon = {
		color: "#3F8CBF",
		fontSize: "3em",
	};
	return (
		<div className={styles.projectsTechUpgrade}>
			<div className={styles.leftUpgrade}>
				<LiaHashtagSolid style={icon} />
				<h1>Tech-Upgrade</h1>
			</div>
			<div className={styles.projectsUpgradeCount}>4</div>
		</div>
	);
};

export default ProjectsTechUpgrade;
