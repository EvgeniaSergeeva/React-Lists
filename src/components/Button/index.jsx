import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Button = (props) => {
  const { color, svg, handleClick } = props;
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button onClick={handleClick} className={styles.block} style={buttonStyle}>
      {" "}
      {svg}{" "}
    </button>
  );
};
Button.propTypes = {
  color: PropTypes.string.isRequired,
  //svg:PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  handleClick: () => {},
};

export default Button;
