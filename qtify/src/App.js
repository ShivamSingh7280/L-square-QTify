import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongs } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import CustomAccordion from "./components/Accordion/CustomAccordion";
import { Toaster } from "react-hot-toast";
import { errorHandler } from "./config/helper-methods";

function App() {
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

			<div>
				<h3 className={styles.tabsTitle}>Songs</h3>
			</div>

			<FilterTabs data={allSongsData} loadingState={loadingState.allSongs} />
			<hr className={styles.line}></hr>
			<div className={styles.customAccordionWrapper}>
				<h1 className={styles.accordionHeader}>FAQs</h1>
				<CustomAccordion />
			</div>
		</>
	);
}

export default App;
