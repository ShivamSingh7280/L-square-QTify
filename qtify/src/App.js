import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
	const [topAlbumData, setTopAlbumData] = useState([]);

	const generateTopAlbumData = async () => {
		const data = await fetchTopAlbums();
		console.log("data", data);
		setTopAlbumData(data);
	};

	useEffect(() => {
		generateTopAlbumData();
	}, []);

	return (
		<>
			<NavBar />
			<HeroSection />
			<div className={styles.sectionWrapper}>
				<Section title="Top Albums" data={topAlbumData} type="album" />
			</div>
		</>
	);
}

export default App;
