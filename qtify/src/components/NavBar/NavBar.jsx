import React, { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
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
		<div className={styles.wrapper}>
			<nav className={styles.navbar}>
				<Logo className={styles.logo} />

				<div className={styles.searchWrapper}>
					<SearchBar placeholder="Search a album of your choice" data={data} />
				</div>

				<div
					className={styles.nav_link}
					onClick={() => _toggleFeedBackModal(true)}>
					Feedback
				</div>
			</nav>
			<FeedBackModal
				isOpen={isFeedBackModalOpen}
				onSuccess={_onSuccess}
				onDismiss={_toggleFeedBackModal}
			/>
		</div>
	);
};

export default NavBar;
