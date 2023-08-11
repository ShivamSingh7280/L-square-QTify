import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
	return (
		<>
			<nav className={styles.navbar}>
				<Logo />
				<SearchBar placeholder="Search a album of your choice" />
				<Button btnText="Give Feedback" />
			</nav>
		</>
	);
};

export default NavBar;
