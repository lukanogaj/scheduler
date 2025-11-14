import styles from "./index.module.scss";
import Wrapper from "../Wrapper/index.";
import Sidebar from "../Sidebar";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Sidebar />
			<Wrapper />
		</div>
	);
};

export default Hero;
