import React, { Component, useState } from "react";

import ListItem from "../ListItem";
import { buttonsList } from "../mockData";
import OrdersList from "../OrdersList";
import styles from "./index.module.scss";

const NewOrders = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="itemWrapper">
      <ListItem
        itemName={buttonsList[1].textContent}
        buttonColor={buttonsList[1].color}
        buttonSvg={buttonsList[1].svg}
        count={`${buttonsList[1].info.reduce(
          (total, current) => total + Number(current.sum),
          0
        )} $$`}
        handleClick={handleToggle}
      />
      <div className={toggle ? styles.show : styles.hide}>
        <OrdersList data={buttonsList[1].info} />
      </div>
    </div>
  );
};
export default NewOrders;
