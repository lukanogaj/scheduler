import styles from "./index.module.scss";
import { Search } from "../../images/icons";

const SearchControl = () => {
	const iconPosition = {
		color: "#A9ACB0",
		position: "absolute",
		top: "25%",
		right: "2%",
		fontSize: "10rem",
	};
	return (
		<div className={styles.search}>
			<input
				type='search'
				placeholder='Search'
				name='search'
			/>
			<Search style={iconPosition} />
		</div>
	);
};

export default SearchControl;
