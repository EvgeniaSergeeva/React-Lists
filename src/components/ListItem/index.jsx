import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import Button from "../Button";

const ListItem = (props) => {
  const { itemName, buttonColor, buttonSvg, count, handleClick } = props;
  return (
    <li className={styles.block}>
      <Button color={buttonColor} svg={buttonSvg} handleClick={handleClick} />
      <div className={styles.content}>
        <p className={styles.itemName}>{itemName}</p>
        <p className={styles.itemName}>{count}</p>
      </div>
    </li>
  );
};
ListItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  //buttonSvg:PropTypes.string.isRequired,
  count: PropTypes.number,
};
export default ListItem;
