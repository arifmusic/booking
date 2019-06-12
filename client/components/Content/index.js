import React from "react";

import styles from "./content.module.scss";

import ContentSideBar from "../ContentSideBar";
import ContentHotelView from "../ContentHotelView";

const Content = () => {
	return (
		<div className={styles.content}>
			<ContentSideBar />
			<ContentHotelView />
		</div>
	);
};

export default Content;
