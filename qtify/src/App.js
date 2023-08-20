import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";

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
			<Section title="Top Albums" data={topAlbumData} type="album" />
		</>
	);
}

export default App;

// <Grid container spacing={2}>
// 				{topAlbumData.map((data) => {
// 					return (
// 						<Grid item key={data.id}>
// 							<Card data={data} type="album" />
// 						</Grid>
// 					);
// 				})}
// 			</Grid>
