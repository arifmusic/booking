import PropTypes from "prop-types";

const Shape = PropTypes.shape({
	// user can be null, so it is not required
	user: PropTypes.object,
	setUser: PropTypes.func.isRequired
});

export default Shape;
