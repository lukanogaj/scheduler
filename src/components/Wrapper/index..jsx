import styles from "./index.module.scss";
import { useState } from "react";
import Overdue from "../Overdue";
import TodoTodayContainer from "../TodoTodayContainer";
const Wrapper = () => {
	const [chevron, setChevron] = useState();
	const chevronHandler = () => {
		setChevron(!chevron);
		console.log("Clicked");
	};
	return (
		<div className={styles.wrapper}>
			<Overdue
				chevronHandler={chevronHandler}
				chevron={chevron}
				setChevron={setChevron}
			/>
			<TodoTodayContainer
				chevronHandler={chevronHandler}
				chevron={chevron}
				setChevron={setChevron}
			/>
		</div>
	);
};

export default Wrapper;
