import React from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";

const Card = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.innerCard}>
					<img src="" alt="" width="" height="" />
					<Button btnText="100 Follows" />
				</div>
				<p>New Bollywood</p>
			</div>
		</>
	);
};

export default Card;
