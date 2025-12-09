import styles from "./index.module.scss";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper/index.";
import DateTimeClock from "../DateTimeClock";
const Content = () => {
	return (
		<div className={styles.content}>
			<Navbar />
			<Wrapper />
			<DateTimeClock />
		</div>
	);
};

export default Content;
