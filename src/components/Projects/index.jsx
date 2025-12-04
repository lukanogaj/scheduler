import styles from "./index.module.scss";
import ProjectsTechUpgrade from "../ProjectsTechUpgrade";
import ProjectsNewDesign from "../ProjectsNewDesign";

const Projects = () => {
	return (
		<div className={styles.projects}>
			<h3>Projects</h3>
			<ProjectsTechUpgrade />
			<ProjectsNewDesign />
		</div>
	);
};

export default Projects;
