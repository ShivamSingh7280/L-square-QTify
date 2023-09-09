import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import {
	fetchTopAlbums,
	fetchNewAlbums,
	fetchAllSongs,
} from "../../api/api.js";
import { useState } from "react";
import Section from "../Section/Section";
import styles from "./LandingPage.module.css";
import FilterTabs from "../FilterTabs/FilterTabs";
import CustomAccordion from "../Accordion/CustomAccordion";
import { Toaster } from "react-hot-toast";
import { errorHandler } from "../../config/helper-methods";

//Accordion Data.(Sending as a props).

const accordionData = [
	{
		id: 1,
		question: "Is QTify free to use?",
		answer: "Yes! It is 100% free, and it has 0% ads!",
	},
	{
		id: 1,
		question: "Can I download and listen to songs offline?",
		answer:
			"	Sorry, unfortunately we don't provide service to download any songs.",
	},
];

function LandingPage() {
	const [topAlbumData, setTopAlbumData] = useState([]);
	const [newAlbumData, setNewAlbumData] = useState([]);
	const [allSongsData, setAllSongsData] = useState([]);
	const [loadingState, setLoadingState] = useState({
		topAlbum: true,
		newAlbum: true,
		allSongs: true,
	});

	const _manageLoadingState = (key = "", value = false) => {
		setLoadingState((prev) => ({ ...prev, [key]: value }));
	};

	const generateTopAlbumData = async () => {
		try {
			_manageLoadingState("topAlbum", true);
			const data = await fetchTopAlbums();
			setTopAlbumData(data);
			_manageLoadingState("topAlbum", false);
		} catch (error) {
			_manageLoadingState("topAlbum", false);
			errorHandler(error);
		}
	};

	const generateNewAlbumData = async () => {
		try {
			_manageLoadingState("newAlbum", true);

			const data = await fetchNewAlbums();
			setNewAlbumData(data);

			_manageLoadingState("newAlbum", false);
		} catch (error) {
			_manageLoadingState("newAlbum", false);
			errorHandler(error);
		}
	};

	const generateAllSongsData = async () => {
		try {
			_manageLoadingState("allSongs", true);

			const data = await fetchAllSongs();
			setAllSongsData(data);

			_manageLoadingState("allSongs", false);
		} catch (error) {
			_manageLoadingState("allSongs", false);
			errorHandler(error);
		}
	};

	useEffect(() => {
		generateTopAlbumData();
		generateNewAlbumData();
		generateAllSongsData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const dropdownData = topAlbumData?.concat(newAlbumData);

	return (
		<>
			<Toaster position="bottom-right" reverseOrder={false} />
			<NavBar data={dropdownData} />

			<HeroSection />
			<div className={styles.sectionWrapper}>
				<Section
					title="Top Albums"
					data={topAlbumData}
					type="album"
					loadingState={loadingState.topAlbum}
				/>
				<Section
					title="New Albums"
					data={newAlbumData}
					type="album"
					loadingState={loadingState.newAlbum}
				/>
			</div>
			<hr className={styles.line}></hr>

			<div className={styles.filter_songs_wrapper}>
				<div>
					<h3 className={styles.tabsTitle}>Songs</h3>
				</div>
				<FilterTabs data={allSongsData} loadingState={loadingState.allSongs} />
			</div>
			<hr className={styles.line}></hr>
			<div className={styles.customAccordionWrapper}>
				<h1 className={styles.accordionHeader}>FAQs</h1>

				{accordionData?.length ? (
					accordionData.map((each, index) => {
						return <CustomAccordion key={index} data={each} />;
					})
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default LandingPage;
