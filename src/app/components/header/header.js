import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { HEADER_LINKS } from "../../constants";
import { Row, ContainerFluid } from "../layout";
import { LOGO } from "../../assets/imgs";
import Icon from "../common/Icon";
import { setLocalStorage } from "../../utils/common";
import { logout } from "./headerService";
import { toast } from "react-toastify";
import { SOMETHING_WRONG } from "../../constants/messages";

class Header extends React.PureComponent {

  logout = () => {
    logout().then(res => {
      if(res.data.success) {
        const { setAppData } = this.props;
        setLocalStorage('isLoggedIn', false);
        setLocalStorage('user', null);
        setAppData({isLoggedIn:false})
      } else toast.error(res.data.message);
    })
    .catch(err => {
      toast.error(SOMETHING_WRONG);
    })
  }

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
          <li onClick={this.logout}>
            <Icon name="logout" /> Logout
          </li>
        </ul>
      </div>
    );
  };

  toggleSideBar = () => {
    const { setAppData, sidebar } = this.props;
    setAppData({sidebar:!sidebar});
  }

  renderToggleBtn = () => {
    const { sidebar } = this.props;
    if(sidebar) {
      return (
        <div className="toggle" onClick={this.toggleSideBar}>
          <Icon name="list" />
          Hide
        </div>
      );
    }
    return (
      <div className="toggle" onClick={this.toggleSideBar}>
        <Icon name="list" />
        Show
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
