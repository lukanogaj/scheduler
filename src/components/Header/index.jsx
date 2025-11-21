import { useState } from "react";

import styles from "./index.module.scss";

import mojo from "../images/mojo.jpg";
import splitScreen from "../images/split.png";
import { ChevronDown } from "../images/icons";
import { ChevronUp } from "../images/icons";
import { SplitScreen } from "../images/icons";

const Header = () => {
	const [dropDown, setDropDown] = useState(true);

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
				<img
					src={splitScreen}
					alt=''
				/>
			</div>
		</div>
	);
};

export default Header;
