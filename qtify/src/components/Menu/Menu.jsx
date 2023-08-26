import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";

const Menu = ({ albums }) => {
	console.log("album", albums);
	return (
		<>
			<div className={styles.wrapper}>
				{albums?.length
					? albums.map((item) => (
							<div className={styles.menuItemWrapper}>
								<MenuItem
									image={item.image}
									albumName={item.title}
									follows={item.follows}
									key={item.id}
								/>
							</div>
					  ))
					: null}
			</div>
		</>
	);
};

export default Menu;
