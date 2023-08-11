import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
	const { btnText } = props;
	return (
		<div>
			<button className={styles.button}>{btnText}</button>
		</div>
	);
};

export default Button;
