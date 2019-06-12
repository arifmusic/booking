import React from "react";

import HeaderLogo from "../HeaderLogo";
import HeaderForm from "../HeaderForm";
import HeaderUserNav from "../HeaderUserNav";

import styles from "./header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderLogo />
			<HeaderForm />
			<HeaderUserNav />
		</header>
	);
};

export default Header;
