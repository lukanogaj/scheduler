import { useState } from "react";

import styles from "./index.module.scss";

import mojo from "../images/mojo.jpg";
import { ChevronDown } from "../images/icons";
import { ChevronUp } from "../images/icons";
import { BsLayoutSplit } from "react-icons/bs";
const Header = () => {
	const [dropDown, setDropDown] = useState(true);
	const icon = {
		color: "#DBDDE1",
		fontSize: "3em",
	};

	const dropdownHandler = () => {
		setDropDown(!dropDown);
		console.log("Clicked");
	};
	return (
		<div className={styles.header}>
			<div className={styles.mojoHeader}>
				<div className={styles.mojoImg}>
					<img
						src={mojo}
						alt='Mojo'
					/>
				</div>
				<h1>Lukasz</h1>
				<div
					className={styles.dropDownHandler}
					onClick={dropdownHandler}>
					{dropDown ? <ChevronDown /> : <ChevronUp />}
				</div>
			</div>
			<div className={styles.split}>
				<BsLayoutSplit style={icon} />
			</div>
		</div>
	);
};

export default Header;
