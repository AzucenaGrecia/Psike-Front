import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../ui";
import Icon from "../UI/Icon";
import {  SideBarDataLogin, SideBarDataWhitoutLogin } from "./MenuMobileData";

export default function MenuMobile({}) {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const token = sessionStorage.getItem("token");
  return (
    <StyledMenuMobile>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <Icon
            type="menu"
            size={30}
            fill={colors.pink1}
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <Icon
                type="close"
                size={30}
                fill={colors.blue}
                onClick={showSidebar}
              />
            </Link>
          </li>
          { token == null ? SideBarDataWhitoutLogin.map((item, index) => {
            return (
              <li key={index} className="nav-menu-item" className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          }):
          SideBarDataLogin.map((item, index) => {
            return (
              <li key={index} className="nav-menu-item" className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })
          }
        </ul>
      </nav>
    </StyledMenuMobile>
  );
}

const StyledMenuMobile = styled.div`
  .navbar {
    text-align: end;
  }
  .nav-menu {
    background-color: ${colors.pink1};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    transition: 600ms;
    left: 50%;
    z-index: 1;
    .nav-menu-items {
      width: 100%;
      list-style: none;
      padding: 20px 0px;

      .navbar-toggle {
        margin-left: 40%;
      }
      .nav-text {
        display: flex;
        align-items: center;
        gap: 16px;
        a {
          text-decoration: none;
          color: ${colors.white2};
          font-size: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 20px;
          width: 100%;
          border-radius: 20px;
        }
      }
    }
  }

  .nav-text a:hover {
    background-color: ${colors.blue_ligth};
  }
  .nav-menu.active {
    left: 800px;
    transition: 350ms;
  }
`;
