import React from "react";

import styles from "./headerLogo.module.scss";
import logo from "../../static/img/logo.png";

const Logo = () => {
	return <img src={logo} alt="front1 logo" className={styles.logo} />;
};

export default Logo;
