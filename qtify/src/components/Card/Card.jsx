import React from "react";
import { Tooltip, Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
	// Ensuring that data is defined and contains the expected properties.
	if (!data || !data.image || !data.follows || !data.title || !data.songs) {
		return null; // Return null if data is missing or incomplete.
	}

	const getCard = (type) => {
		switch (type) {
			case "album":
				return (
					<Tooltip
						title={`${data.songs.length} songs`}
						className={styles.tooltip}
						placement="top"
						arrow>
						<div className={styles.wrapper}>
							<div className={styles.card}>
								<img src={data.image} alt="album" />
								<div className={styles.banner}>
									<Chip
										label={`${data.follows} Follows`}
										className={styles.chip}
										size="small"
									/>
								</div>
							</div>
							<div className={styles.titleWrapper}>
								<p>{data.title}</p>
							</div>
						</div>
					</Tooltip>
				);
			default:
				return null; // Return null if type doesn't match "album"
		}
	};

	return getCard(type);
};

export default Card;
