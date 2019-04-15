import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { HEADER_LINKS } from "../../constants";
import { Row, ContainerFluid } from "../layout";
import { LOGO } from "../../assets/imgs";
import Icon from "../common/Icon";

class Header extends React.PureComponent {
  renderLogo = () => {
    return (
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
    );
  };

  renderMenu = () => {
    return (
      <div className="menu">
        <ul>
          <li>
            <Icon name="bell" />
            Notifications
          </li>
          <li>
            <Icon name="settings" />
            Settings
          </li>
          <li>
            <Icon name="menu" /> Menu
          </li>
          <li>
            <Icon name="logout" /> Logout
          </li>
        </ul>
      </div>
    );
  };

  renderToggleBtn = () => {
    return (
      <div className="toggle">
        <Icon name="arrow-left" />
        Hide
      </div>
    );
  };

  render() {
    return (
      <header className="header">
        {this.renderLogo()}
        {this.renderToggleBtn()}
        {this.renderMenu()}
      </header>
    );
  }
}

export default Header;
