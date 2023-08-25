import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Section from "../Section/Section";
import styles from "./FilterTabs.module.css";

const FilterTabs = ({ data }) => {
	const [value, setValue] = useState(0);

	const _handleTabs = (e, val) => {
		setValue(val);
	};

	function TabPanel(props) {
		const { children, value, index } = props;
		return <div>{value === index && <>{children}</>}</div>;
	}

	// Filter data based on the selected tab value.
	const filteredData = (tabIndex) => {
		if (tabIndex === 0) {
			return data; // Show all data for the "All" tab.
		} else {
			const tabLabel = ["Rock", "Pop", "Jazz", "Blues"][tabIndex - 1];
			return data.filter((item) => item.genre.key === tabLabel.toLowerCase());
		}
	};

	return (
		<div>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs value={value} onChange={_handleTabs} aria-label="basic tabs">
						<Tab label="All" />
						<Tab label="Rock" />
						<Tab label="Pop" />
						<Tab label="Jazz" />
						<Tab label="Blues" />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<div className={styles.filterSectionWrapper}>
						<Section data={filteredData(0)} type="songs" header="all" />
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div className={styles.filterSectionWrapper}>
						<Section data={filteredData(1)} type="songs" header="filterAll" />
					</div>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<div className={styles.filterSectionWrapper}>
						<Section data={filteredData(2)} type="songs" header="filterAll" />
					</div>
				</TabPanel>
				<TabPanel value={value} index={3}>
					<div className={styles.filterSectionWrapper}>
						<Section data={filteredData(3)} type="songs" header="filterAll" />
					</div>
				</TabPanel>
				<TabPanel value={value} index={4}>
					<div className={styles.filterSectionWrapper}>
						<Section data={filteredData(4)} type="songs" header="filterAll" />
					</div>
				</TabPanel>
			</Box>
		</div>
	);
};

export default FilterTabs;
