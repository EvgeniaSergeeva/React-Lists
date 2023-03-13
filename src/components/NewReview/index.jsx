import React, { Component, useState } from "react";

import ListItem from "../ListItem";
import { buttonsList } from "../mockData";
import ReviewList from "../ReviewList";
import styles from "./index.module.scss";

const NewReview = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="itemWrapper">
      <ListItem
        itemName={buttonsList[2].textContent}
        buttonColor={buttonsList[2].color}
        buttonSvg={buttonsList[2].svg}
        count={buttonsList[2].info.length}
        handleClick={handleToggle}
      />
      <div className={toggle ? styles.show : styles.hide}>
        <ReviewList data={buttonsList[2].info} />
      </div>
    </div>
  );
};
export default NewReview;
