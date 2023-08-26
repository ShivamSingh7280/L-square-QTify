import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./CustomAccordion.module.css";
import { ReactComponent as UpArrowIcon } from "../../assets/upArrow.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/downArrow.svg";

const CustomAccordion = () => {
	const [expanded, setExpanded] = useState(null);

	const handleAccordionChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : null);
	};

	return (
		<div className={styles.accordionContainer}>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleAccordionChange("panel1")}
				className={styles.wrapper}>
				<AccordionSummary
					aria-controls="panel1a-content"
					id="panel1a-header"
					className={styles.accordionHeader}>
					<Typography className={styles.accordionText}>
						Is QTify free to use?
					</Typography>
					<div className={styles.arrow}>
						{expanded === "panel1" ? <UpArrowIcon /> : <DownArrowIcon />}
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<Typography className={styles.accordionDescription}>
						Yes! It is 100% free, and it has 0% ads!
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleAccordionChange("panel2")}
				className={styles.wrapper}>
				<AccordionSummary
					aria-controls="panel2a-content"
					id="panel2a-header"
					className={styles.accordionHeader}>
					<Typography className={styles.accordionText}>
						Can I download and listen to songs offline?
					</Typography>
					<div className={styles.arrow}>
						{expanded === "panel2" ? <UpArrowIcon /> : <DownArrowIcon />}
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<Typography className={styles.accordionDescription}>
						Sorry, unfortunately we don't provide service to download any songs.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default CustomAccordion;
