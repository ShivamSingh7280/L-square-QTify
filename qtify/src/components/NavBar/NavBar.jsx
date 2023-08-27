import React, { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import FeedBack from "../FeedBack/FeedBack";

const NavBar = ({ data }) => {
	const [feedback, setFeedBack] = useState(false);
	const _handleClick = () => {
		setFeedBack(!feedback);
	};

	return (
		<>
			<nav className={styles.navbar}>
				<Logo />
				<SearchBar placeholder="Search a album of your choice" data={data} />
				<Button btnText="Give Feedback" onClickHandler={_handleClick} />
			</nav>

			{feedback ? <FeedBack open={feedback} /> : <></>}
		</>
	);
};

export default NavBar;
