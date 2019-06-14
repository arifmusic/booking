import React from "react";

import styles from "./contentHotelView.module.scss";

import ViewGalery from "../ContentHotelViewGalery";
import ViewOverview from "../ContentHotelViewOverview";
import ViewDetail from "../ContentHotelViewDetail";
import ViewCta from "../ContentHotelViewCta";

const HotelView = () => {
	return (
		<main className={styles.hotel_view}>
			<ViewGalery />
			<ViewOverview />
			<ViewDetail />
			<ViewCta />
		</main>
	);
};

export default HotelView;
