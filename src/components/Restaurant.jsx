import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi";
const Resturant = () => {
  const categories = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];

  // console.log(categories);

  // useEffect(() => {
  //   const arr = Menu.map((curElem) => {
  //     return curElem.category;
  //   });

  //   let setarr = [...new Set(arr)];
  //   // console.log(arr);
  //   console.log(setarr);
  // }, []);

  const [menuList, setMenuList] = useState(categories);

  // const menuarr = [
  //   {
  //     id: 1,
  //     image: "https://source.unsplash.com/800x400?cookie,cookie",
  //     name: "Chocolate Delight",
  //     category: "chocolate",
  //     price: "12₹",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero!",
  //     location: "mumbai",
  //     bakedTime: "2",
  //     egg: "egg",
  //   },
  //   {
  //     id: 2,
  //     image: "https://source.unsplash.com/800x401?vanilla,cookie",
  //     name: "vanilla Blast",
  //     category: "vanilla",
  //     price: "20₹",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero!",
  //     location: "mumbai",
  //     bakedTime: "2",
  //     egg: "egg",
  //   },
  // ];

  const [menudata, setMenudata] = useState(Menu);

  const filterItem = (category) => {
    // const category = "chocolate";

    if (category === "All") {
      setMenudata(Menu);
      return;
    }

    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    console.log(updatedlist);
    setMenudata(updatedlist);
  };

  // useEffect(() => {
  //   filterItem("vanilla");
  // }, []);

  return (
    <>
      <Navbar menuList={menuList} filterItem={filterItem} />
      <MenuCard menudata={menudata} />
    </>
  );
};

export default Resturant;
