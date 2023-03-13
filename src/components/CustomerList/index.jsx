import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";
import CustomerListItem from "../CustomerListItem";

const CustomerList = ({ data }) => {
  if (!data) {
    return <p className={styles.noData}>No data available</p>;
  }
  return (
    <ul className={styles.block}>
      {data.map((item, idx) => (
        <CustomerListItem
          image={item.customerPhoto}
          alt={item.alt}
          custName={item.customerName}
          key={`${item.image}${idx}`}
        />
      ))}
    </ul>
  );
};

CustomerList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      alt: PropTypes.string,
      custName: PropTypes.string,
    })
  ),
};

export default CustomerList;
