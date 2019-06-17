import React from "react";

import styles from "./style/home.module.scss";

import ContentSideBar from "../components/ContentSideBar";
import ContentHotelView from "../components/ContentHotelView";

const Content = () => {
	return (
		<div className={styles.content}>
			<ContentSideBar />
			<ContentHotelView />
		</div>
	);
};

export default Content;