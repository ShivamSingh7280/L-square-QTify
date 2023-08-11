import React from "react";
import styles from "./HeroSection.module.css";
import { ReactComponent as FirstBanner } from "../../assets/100 Thousand Songs, ad-free.svg";
import { ReactComponent as SecondBanner } from "../../assets/Over thousands podcast episodes.svg";
import { ReactComponent as Headphone } from "../../assets/headphone.svg";

const HeroSection = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.heroImageWrapper}>
					<div className={styles.banner}>
						<span>
							<FirstBanner />
						</span>
						<span>
							<SecondBanner />
						</span>
					</div>
					<div>
						<Headphone />
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
