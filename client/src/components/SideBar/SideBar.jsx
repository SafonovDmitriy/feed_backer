import React from "react";
import { ROUTING_MAP } from "../../constants";
import { NavLink } from "react-router-dom";
import "./SideBar.styles.scss";

const SideBar = () => {
  const menu = [
    { title: "Отзывы", link: ROUTING_MAP.REVIEWS },
    { title: "Отчет", link: ROUTING_MAP.REPORT },
  ];
  return (
    <div className="sideBar">
      <div className="sideBar_header">
        <h1 className="sideBar_header_title">
          F<span>ee</span>dB<span>ac</span>ker
        </h1>
      </div>
      <div className="sideBar_menu">
        {menu.map((menuItem) => (
          <NavLink key={menuItem.link} to={menuItem.link}>
            {menuItem.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default SideBar;
