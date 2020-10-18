import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { FaRegUser } from "react-icons/fa";

class Nav extends Component {
  render() {
    const ICONS = [
      {
        id: 1,
        path: "/main-eunjin",
        title: "home",
        className: "firstIcon",
        src: "images/eunjinbaek/instaHomeIcon.png",
        alt: "Home Icon",
      },
      {
        id: 2,
        path: "/main-eunjin",
        title: "DM",
        className: "icons",
        src: "images/eunjinbaek/dmicon.png",
        alt: "DM Icon",
      },
      {
        id: 3,
        path: "/main-eunjin",
        title: "explore",
        className: "icons",
        src:
          "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png",
        alt: "Explore new feeds Icon",
      },
      {
        id: 4,
        path: "/main-eunjin",
        title: "like",
        className: "icons",
        src:
          "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png",
        alt: "Like Icon",
      },
    ];
    return (
      <nav className="Nav">
        <div className="boxInNav">
          <div className="logo">
            <a href="/main-eunjin">
              <img
                src="images/eunjinbaek/small_logo.png"
                alt="instargram_logo"
              />
            </a>
          </div>
          <div className="inputbox">
            <div className="searchIcon" alt="search" />
            <input type="text" autoCapitalize="none" placeholder="검색" />
          </div>
          <div className="iconsBigBox">
            <div className="iconsSmallBox">
              {ICONS.map((icon) => {
                return (
                  <Link key={icon.id} to={icon.path} title={icon.title}>
                    <img
                      className={icon.className}
                      src={icon.src}
                      alt={icon.alt}
                    />
                  </Link>
                );
              })}
              <a href="/main-eunjin" title="user">
                <FaRegUser className="UserIcon" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
