import styles from "./index.module.scss";
import Overdue from "../Overdue";
const Wrapper = () => {
	return (
		<div className={styles.wrapper}>
			<Overdue />
		</div>
	);
};

export default Wrapper;
