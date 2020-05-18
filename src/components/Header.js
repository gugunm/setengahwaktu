import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <div className="head-top">
      <a href="/">
        <img
          src="/images/sw-logo.png"
          alt="logo tehataukopi"
          height="80"
          width="80"
          class="is-avatar"
        />
      </a>
      <div>
        <h1>Setengah Waktu</h1>
        <h2>Pada setengah waktuku, kuceritakan padamu.</h2>
      </div>
    </div>

    <div className="distribution">
      <a href="https://anchor.fm/setengahwaktu" target="_blank">
        <img id="anchor" src="/images/anchor2.svg" />
      </a>
      <a
        href="https://open.spotify.com/show/397LmMFUWWxerHwm2BLvOX"
        target="_blank"
      >
        <img id="spotify" src="/images/spotify.svg" />
      </a>
      <a href="https://www.instagram.com/setengah.waktu/" target="_blank">
        <img id="ig" src="/images/ig.svg" />
      </a>
    </div>

    <div className="head-bottom">
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/teams" activeClassName="is-active">
        Podcaster
      </NavLink>
    </div>
  </header>
);

export default Header;
