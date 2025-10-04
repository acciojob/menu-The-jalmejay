import React from "react";
import "./styles.css";

const Menu = ({ data }) => {
  console.log(data);
  return (
    <div className="menus">
      {data &&
        data.map((e) => {
          return (
            <div key={e.id} className="menu-item">
              <img src={e.img} alt={e.name} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{e.name}</h4>
                  <h4 className="price">${e.price}</h4>
                </header>
                <p className="item-text">{e.desc}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Menu;
