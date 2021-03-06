import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./sidebar.scss";

class Sidebar extends React.PureComponent {
  isActive = url => {
    const { location } = this.props;
    const path = location ? location.pathname : "";
    if (url === undefined && path === "/") {
      return "active";
    }
    if (path !== "/" && path.includes(url)) {
      return "active";
    }

    return "";
  };

  render() {
    const { sidebar } = this.props;
    if (sidebar) {
      return (
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/" className={this.isActive()}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={this.isActive("blog")}>
               Manage Blogs
              </Link>
            </li>
            <li>
              <Link to="/categories" className={this.isActive("categories")}>
              Manage Categories
              </Link>
            </li>
            <li>
              <Link to="/tagging" className={this.isActive("tagging")}>
                Category-Blog Tagging
              </Link>
            </li>
          </ul>
        </div>
      );
    } else return null;
  }
}

export default withRouter(Sidebar);
