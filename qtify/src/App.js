import React, { useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongs } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import CustomAccordion from "./components/Accordion/CustomAccordion";
import SearchBar from "./components/SearchBar/SearchBar";

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
			console.log(error);
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
			console.log(error);
		}
	};

	const generateAllSongsData = async () => {
		try {
			_manageLoadingState("allSongs", true);

			const data = await fetchAllSongs();
			setAllSongsData(data);

			_manageLoadingState("allSongs", false);
		} catch (err) {
			_manageLoadingState("allSongs", false);
			console.log(err);
		}
	};

	useEffect(() => {
		generateTopAlbumData();
		generateNewAlbumData();
		generateAllSongsData();
	}, []);

	return (
		<>
			<NavBar data={topAlbumData} />
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
