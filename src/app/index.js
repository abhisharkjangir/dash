import "@babel/polyfill";
import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Routes from "./routes";

import "./styles/main.scss";
import ScrollToTop from "./components/scrolltotop";

class App extends Component {
  render() {
    return (
      <ScrollToTop>
        <div id="app">
          <Header />
          <div id="content" className="content">
            <Sidebar />
            <div className='main'>
              <Routes />
            </div>
            <Footer />
          </div>
        </div>
      </ScrollToTop>
    );
  }
}

export default App;
