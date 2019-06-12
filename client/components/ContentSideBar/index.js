import React from "react";

import Svg from "../Svg";
import styles from "./contentSideBar.module.scss";

const SideBar = () => {
	return (
		<nav className={styles.sidebar}>
			<ul className={styles.side_nav}>
				<li className={`${styles.side_nav__item} ${styles.side_nav__item_active}`}>
					<a href="#" className={styles.side_nav__link}>
						<Svg name="home" prp={styles.side_nav__icon} />
						<span>Hotel</span>
					</a>
				</li>
				<li className={styles.side_nav__item}>
					<a href="#" className={styles.side_nav__link}>
						<Svg name="aircraft-take-off" prp={styles.side_nav__icon} />
						<span>Flight</span>
					</a>
				</li>
				<li className={styles.side_nav__item}>
					<a href="#" className={styles.side_nav__link}>
						<Svg name="key" prp={styles.side_nav__icon} />
						<span>Car rental</span>
					</a>
				</li>
				<li className={styles.side_nav__item}>
					<a href="#" className={styles.side_nav__link}>
						<Svg name="map" prp={styles.side_nav__icon} />
						<span>Tours</span>
					</a>
				</li>
			</ul>
			<div className={styles.legal}>&copy; 2017 by trillo. All rights reserved.</div>
		</nav>
	);
};

export default SideBar;
