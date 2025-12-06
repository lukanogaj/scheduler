import styles from "./index.module.scss";
import { LiaHashtagSolid } from "react-icons/lia";

const ProjectsNewDesign = () => {
	const icon = {
		color: "#3F8CBF",
		fontSize: "3em",
	};
	return (
		<div className={styles.projectsNewDesign}>
			<div className={styles.leftDesign}>
				<LiaHashtagSolid style={icon} />
				<h1>New Design</h1>
			</div>
			<div className={styles.projectsNewDesignCount}>4</div>
		</div>
	);
};

export default ProjectsNewDesign;
