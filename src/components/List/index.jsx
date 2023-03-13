import React from "react";
import PropTypes from "prop-types";

import ListItem from "../ListItem";
import styles from "./index.module.scss";
import CustomerList from "../CustomerList";
import { buttonsList } from "../mockData";

const List = ({ data }) => {
  const ulStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  };
  if (!data) {
    return <p className={styles.noData}>No data available</p>;
  }
  return (
    <ul style={ulStyle}>
      {data.map((item, idx) => (
        <ListItem
          itemName={item.textContent}
          buttonColor={item.color}
          buttonSvg={item.svg}
          count={item.counter}
          key={`${item.svg}${idx}`}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.string,
      buttonColor: PropTypes.string,
      //buttonSvg:PropTypes.string,
      count: <PropTypes className="number"></PropTypes>,
    })
  ),
};
export default List;
