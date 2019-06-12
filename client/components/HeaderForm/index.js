import React from "react";

import styles from "./headerForm.module.scss";

import Svg from "../Svg";

const Form = () => {
	return (
		<form action="#" className={styles.search}>
			<input type="text" className={styles.search__input} placeholder="Search hotels" />
			<button className={styles.search__button}>
				<Svg name="magnifying-glass" prp={styles.search__icon} />
			</button>
		</form>
	);
};

export default Form;
