import React, { Component } from "react";
import "./footer.scss";
import { ContainerFluid } from "../layout";
import { LOGO } from "../../assets/imgs";


class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <footer className="footer">
       Meuzic Copyright © {year} <span className='float-right'>Made with <span role='img' aria-label='heart'>💖</span> by <a href="http://abhijangir.me">Abhishar Jangir.</a></span>
      </footer>
    );
  }
}

export default Footer;
