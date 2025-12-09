import styles from "./index.module.scss";
import Content from "../Content";
import Sidebar from "../Sidebar";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Sidebar />
			<Content />
		</div>
	);
};

export default Hero;
