import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";
import OrdersListItem from "../OrdersListItem";

const OrdersList = ({ data }) => {
  if (!data) {
    return <p className={styles.noData}>No data available</p>;
  }
  return (
    <ul className={styles.block}>
      {data.map((item, idx) => (
        <OrdersListItem
          id={item.id}
          date={item.date}
          sum={item.sum}
          key={`${item.date}${idx}`}
        />
      ))}
    </ul>
  );
};

OrdersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      sum: PropTypes.number,
    })
  ),
};

export default OrdersList;
