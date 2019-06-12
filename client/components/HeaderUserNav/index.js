import React from "react";

import Svg from "../Svg";
import user6 from "../../static/img/user6.jpg";

import styles from "./headerUserNav.module.scss";

const UserNav = () => {
	return (
		<nav className={styles.user_nav}>
			<div className={styles.user_nav__icon_box}>
				<Svg name="bookmark" prp={styles.user_nav__icon} />
			</div>
			<div className={styles.user_nav__icon_box}>
				<Svg name="chat" prp={styles.user_nav__icon} />
				<span className={styles.user_nav__notification}>13</span>
			</div>
			<div>
				<img
					src={user6}
					alt="User photo"
					className={styles.user_nav__user_photo}
				/>
				<span>Jonas</span>
			</div>
		</nav>
	);
};

export default UserNav;
