import styles from "./index.module.scss";
import { useState } from "react";
import { ChevronUp } from "../images/icons";
import { ChevronDown } from "../images/icons";

const Chevron = () => {
	const [chevron, setChevron] = useState();
	const chevronHandler = () => {
		setChevron(!chevron);
		console.log("Clicked");
	};
	const icon = {
		color: "#DBDDE1",
		fontSize: "3em",
	};
	return (
		<div
			className={styles.chevron}
			onClick={chevronHandler}>
			{chevron ? <ChevronDown style={icon} /> : <ChevronUp style={icon} />}
		</div>
	);
};

export default Chevron;
