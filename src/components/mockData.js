import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

export const buttonsList = [
  {
    color: "red",
    svg: <FontAwesomeIcon icon={faSackDollar} />,
    textContent: "Revenue",
    counter: 1,
  },
  {
    color: "lightblue",
    svg: <FontAwesomeIcon icon={faCartPlus} />,
    textContent: "Orders",
    counter: 2,
    info: [
      {
        id: "1",
        date: "02/01/2022",
        sum: 1524,
      },
      {
        id: "2",
        date: "03/01/2022",
        sum: 24,
      },
      {
        id: "3",
        date: "04/01/2022",
        sum: 54,
      },
      {
        id: "4",
        date: "05/01/2022",
        sum: 2524,
      },
      {
        id: "5",
        date: "06/01/2022",
        sum: 5243,
      },
    ],
  },
  {
    color: "yellow",
    svg: <FontAwesomeIcon icon={faPenNib} />,
    textContent: "Reviews",
    counter: 3,
    info: [
      {
        customerPhoto:
          "https://cdn.shopify.com/s/files/1/1140/8354/files/Iron_Man.jpg?v=1631859774",
        alt: "Black Panter",
        customerReview: "lorem ipsum...",
      },
      {
        customerPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeT4dY4MM_ygFe9cfr1MOCUwq0jNLxJXS3vzunjla-Stb14w7pcxMk4aqVcN_j21qwbWY&usqp=CAU",
        alt: "Scarlet",
        customerReview: "lorem...",
      },
    ],
  },
  {
    color: "green",
    svg: <FontAwesomeIcon icon={faUser} />,
    textContent: "New customers",
    counter: 4,
    info: [
      {
        customerPhoto:
          "https://cdn.marvel.com/u/prod/marvel/i/mg/1/c0/537ba2bfd6bab/standard_xlarge.jpg",
        alt: "Black Panter",
        customerName: "Black Panter",
      },
      {
        customerPhoto:
          "https://cdn.shopify.com/s/files/1/1140/8354/files/Iron_Man.jpg?v=1631859774",
        alt: "Iron Man",
        customerName: "Iron Man",
      },
      {
        customerPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeT4dY4MM_ygFe9cfr1MOCUwq0jNLxJXS3vzunjla-Stb14w7pcxMk4aqVcN_j21qwbWY&usqp=CAU",
        alt: "Scarlet",
        customerName: "Scarlet",
      },
      {
        customerPhoto:
          "https://i.pinimg.com/originals/7a/63/55/7a6355f7604c03b428883231c1c70b71.png",
        alt: "Spider-man",
        customerName: "Spider-man",
      },
    ],
  },
];
