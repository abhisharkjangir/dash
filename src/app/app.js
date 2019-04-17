import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Routes from "./routes";
import ScrollToTop from "./components/scrolltotop";

class App extends Component {

  componentWillMount() {
    const { storage, setAppData } = this.props;
    if(storage.isLoggedIn && storage.user) {
      setAppData({isLoggedIn: true, ...storage.user});
    } else {
      setAppData({isLoggedIn: false});
    }
  }

  render() {
    const { isLoggedIn, sidebar } = this.props;
    if(isLoggedIn) {
      return (
        <ScrollToTop>
          <div id="app">
            <ToastContainer />
            <Header />
            <div id="content" className="content">
              <Sidebar />
              <div className={sidebar ? 'main' : 'main-no-sidebar'}>
                <Routes />
              </div>
              <Footer sidebar={sidebar}/>
            </div>
          </div>
        </ScrollToTop>
      )
    } else {
      return (
        <ScrollToTop>
          <div id="app">
            <ToastContainer />
            <div id="content" className="content">
              <div className='main-guest-user'>
                <Routes />
              </div>
            </div>
          </div>
        </ScrollToTop>
      )
    }
  }
}

export default App;
