import React, { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import FeedBackModal from "../Modals/FeedBackModal/FeedBackModal";
import { showToast } from "../../config/helper-methods";

const NavBar = ({ data }) => {
	const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);

	const _toggleFeedBackModal = (value = false) => {
		setIsFeedBackModalOpen(value);
	};

	const _onSuccess = () => {
		// show toast
		showToast("Feedback Submitted", "success");
	};

	return (
		<>
			<nav className={styles.navbar}>
				<Logo />
				<SearchBar placeholder="Search a album of your choice" data={data} />
				<Button
					btnText="Give Feedback"
					onClickHandler={() => _toggleFeedBackModal(true)}
				/>
			</nav>
			<FeedBackModal
				isOpen={isFeedBackModalOpen}
				onSuccess={_onSuccess}
				onDismiss={_toggleFeedBackModal}
			/>
		</>
	);
};

export default NavBar;
