import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const OrdersListItem = (props) => {
  const { id, date, sum } = props;
  return (
    <li className={styles.block}>
      <p className={styles.id}>{id}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.sum}>{`${sum} $`}</p>
    </li>
  );
};
OrdersListItem.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  sum: PropTypes.number.isRequired,
};
OrdersListItem.defaultProps = {
  id: "0",
  date: "no date",
  sum: 0,
};
export default OrdersListItem;
