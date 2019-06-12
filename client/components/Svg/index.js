import React from "react";
import PropTypes from 'prop-types';

import Icons from "../../static/img/sprite.svg" 

const Svg = ({name, prp}) => {
	return (
		<svg className={prp}>
			<use xlinkHref={`${Icons}#icon-${name}`} />
		</svg>
	);
};

Svg.propTypes = {
  name: PropTypes.string.isRequired
};

export default Svg;
