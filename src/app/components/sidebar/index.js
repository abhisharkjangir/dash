import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { Row, ContainerFluid } from "../layout";

class Sidebar extends React.PureComponent {
  render() {
    return (
        <div className='sidebar'>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
            <li>Logout</li>
            <li>About</li>
            <li>Terms</li>
          </ul>
        </div>
    );
  }
}

export default Sidebar;
