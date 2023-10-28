import React, { useEffect, useState } from "react";

const MenuCard = ({ menudata }) => {
  // console.log(menudata, "######################");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const filteredMenuData = menudata.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search by name"
          className="search-bar-input"
          value={searchTerm}
          onChange={(event) => handleSearch(event)}
        />
      </div>
      <section className="main-card--container">
        {filteredMenuData.map((curElem) => {
          const { id, category, name, description, image } = curElem;
          return (
            <div className="card-container">
              <div className="card ">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />

                <span className="card-tag  subtle">Order Now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
