import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongs } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";
import FilterTabs from "./components/FilterTabs/FilterTabs";

function App() {
	const [topAlbumData, setTopAlbumData] = useState([]);
	const [newAlbumData, setNewAlbumData] = useState([]);
	const [allSongsData, setAllSongsData] = useState([]);

	const generateTopAlbumData = async () => {
		const data = await fetchTopAlbums();
		setTopAlbumData(data);
	};

	const generateNewAlbumData = async () => {
		const data = await fetchNewAlbums();
		setNewAlbumData(data);
	};

	const generateAllSongsData = async () => {
		const data = await fetchAllSongs();
		setAllSongsData(data);
	};

	useEffect(() => {
		generateTopAlbumData();
		generateNewAlbumData();
		generateAllSongsData();
	}, []);

	return (
		<>
			<NavBar />
			<HeroSection />
			<div className={styles.sectionWrapper}>
				<Section title="Top Albums" data={topAlbumData} type="album" />
				<Section title="New Albums" data={newAlbumData} type="album" />
			</div>
			<hr></hr>
			<div>
				<h3 className={styles.tabsTitle}>Songs</h3>
			</div>

			<FilterTabs data={allSongsData} />
		</>
	);
}

export default App;
