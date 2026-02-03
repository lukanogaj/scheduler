import styles from "./index.module.scss";
import { Hash } from "../images/icons";

const ProjectsNewDesign = () => {
	return (
		<div className={styles.projectItem}>
			<div className={styles.left}>
				<Hash className={[styles.icon, styles.iconGreen].join(" ")} />

				<span className={styles.title}>New Design</span>
			</div>
			<span className={styles.count}>4</span>
		</div>
	);
};

export default ProjectsNewDesign;
