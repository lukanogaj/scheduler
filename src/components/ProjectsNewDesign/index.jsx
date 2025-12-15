import styles from "./index.module.scss";
import { Hash } from "../images/icons";

const ProjectsNewDesign = () => {
	const icon = {
		color: "#3F8CBF",
	};
	return (
		<div className={styles.projectsNewDesign}>
			<div className={styles.leftDesign}>
				<Hash style={icon} />
				<h1>New Design</h1>
			</div>
			<div className={styles.projectsNewDesignCount}>4</div>
		</div>
	);
};

export default ProjectsNewDesign;
