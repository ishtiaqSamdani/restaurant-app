import React from "react";

const Navbar = ({ menuList, filterItem }) => {
  // console.log(menuList);
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}

          {/* chocolate  vanilla ..... all */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
