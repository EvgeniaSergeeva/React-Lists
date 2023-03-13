import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const ReviewListItem = (props) => {
  const { image, alt, custName } = props;
  return (
    <li className={styles.block}>
      <img className={styles.custPhoto} src={image} alt={alt} />
      <p className={styles.customerName}>{custName}</p>
    </li>
  );
};
ReviewListItem.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  custName: PropTypes.string.isRequired,
};
ReviewListItem.defaultProps = {
  image: "",
  alt: "no image",
};
export default ReviewListItem;
