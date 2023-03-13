import React, { Component, useState } from "react";

import ListItem from "../ListItem";
import { buttonsList } from "../mockData";
import CustomerList from "../CustomerList";
import styles from "./index.module.scss";

const NewCustomer = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="itemWrapper">
      <ListItem
        itemName={buttonsList[3].textContent}
        buttonColor={buttonsList[3].color}
        buttonSvg={buttonsList[3].svg}
        count={buttonsList[3].info.length}
        handleClick={handleToggle}
      />
      <div className={toggle ? styles.show : styles.hide}>
        <CustomerList data={buttonsList[3].info} />
      </div>
    </div>
  );
};
export default NewCustomer;
