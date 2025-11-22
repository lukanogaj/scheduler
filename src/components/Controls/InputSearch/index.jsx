import styles from "./index.module.scss";
import searchIcon from "../../images/search-trans.png";
import { IoSearchOutline } from "react-icons/io5";

const SearchControl = () => {
	const iconPosition = {
		color: "white",
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
