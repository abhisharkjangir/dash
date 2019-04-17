import React from "react";
import Page from "../../components/page";
import "./notfound.scss";
import Meta from "../../constants/meta";
import LinkButton from '../../components/common/linkButton';
import { LOGO } from '../../assets/imgs';

export default () => (
  <Page {...Meta.notfound} noCrawl>
    <div className="notfound-page">
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className='box'>
        <h2>404</h2>
        <p>This is not the web page you are looking for.</p>
      </div>
      <LinkButton to='/' label='GO BACK TO HOME'/>
    </div>
  </Page>
);
