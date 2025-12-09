import styles from "./index.module.scss";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper/index.";
const Content = () => {
	return (
		<div className={styles.content}>
			<Navbar />
			<Wrapper />
		</div>
	);
};

export default Content;
