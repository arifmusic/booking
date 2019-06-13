import React from "react";

import styles from "./contentHotelView.module.scss";

import ViewGalery from "../ContentHotelViewGalery";

const HotelView = () => {
	return (
		<main className={styles.hotel_view}>
			<ViewGalery />
		</main>
	);
};

export default HotelView;
