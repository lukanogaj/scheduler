import styles from "./index.module.scss";
import { ChevronUp } from "../images/icons";
import { ChevronDown } from "../images/icons";

const Chevron = ({ chevronHandler, chevron }) => {
	const icon = {
		color: "#DBDDE1",
		fontSize: "3em",
	};
	return (
		<div
			className={styles.dropDownHandler}
			onClick={chevronHandler}>
			{chevron ? <ChevronDown style={icon} /> : <ChevronUp style={icon} />}
		</div>
	);
};

export default Chevron;
