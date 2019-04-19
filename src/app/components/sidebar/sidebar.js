import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { Row, ContainerFluid } from "../layout";

class Sidebar extends React.PureComponent {
  render() {
    const { sidebar } = this.props;
    if(sidebar) {
      return (
        <div className='sidebar'>
          <ul>
            <li><Link to='blogs'>Blogs</Link></li>
            <li>Users</li>
            <li>Settings</li>
            <li>Logout</li>
            <li>About</li>
            <li>Terms</li>
          </ul>
        </div>
      );
    } else return null;
  }
}

export default Sidebar;
