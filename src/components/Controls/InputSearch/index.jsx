import styles from "./index.module.scss";
import { IoSearchOutline } from "react-icons/io5";

const SearchControl = () => {
	const iconPosition = {
		color: "#A9ACB0",
		position: "absolute",
		top: "24%",
		right: "2%",
		fontSize: "3em",
	};
	return (
		<div className={styles.search}>
			<input
				type='search'
				placeholder='Search'
				name='search'
			/>
			<IoSearchOutline style={iconPosition} />
		</div>
	);
};

export default SearchControl;
