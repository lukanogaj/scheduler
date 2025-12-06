import styles from "./index.module.scss";
import ProjectsTechUpgrade from "../ProjectsTechUpgrade";
import ProjectsNewDesign from "../ProjectsNewDesign";

const Projects = () => {
	return (
		<div className={styles.projects}>
			<h2>Projects</h2>
			<ProjectsTechUpgrade />
			<ProjectsNewDesign />
		</div>
	);
};

export default Projects;
