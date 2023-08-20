import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
	const [topAlbumData, setTopAlbumData] = useState([]);
	const [newAlbumData, setNewAlbumData] = useState([]);

	const generateTopAlbumData = async () => {
		const data = await fetchTopAlbums();
		setTopAlbumData(data);
	};

	const generateNewAlbumData = async () => {
		const data = await fetchNewAlbums();
		setNewAlbumData(data);
	};

	useEffect(() => {
		generateTopAlbumData();
		generateNewAlbumData();
	}, []);

	return (
		<>
			<NavBar />
			<HeroSection />
			<div className={styles.sectionWrapper}>
				<Section title="Top Albums" data={topAlbumData} type="album" />
				<Section title="New Albums" data={newAlbumData} type="album" />
			</div>
		</>
	);
}

export default App;
