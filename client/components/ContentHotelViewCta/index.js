import React from "react";

import styles from "./contentHotelViewCta.module.scss";

const Cta = () => {
	return (
		<div className={styles.cta}>
			<h2 className={styles.cta__book_now}>
				Good news! We have 4 free rooms for your selected dates!
			</h2>
			<button className={styles.btn}>
				<span className={styles.btn__visible}>Book now</span>
				<span className={styles.btn__invisible}>Only 4 rooms left</span>
			</button>
		</div>
	);
};

export default Cta;
