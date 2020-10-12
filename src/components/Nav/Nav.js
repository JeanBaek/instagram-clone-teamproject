import React, { Component } from "react";
import "./Nav.scss";
import { FaRegUser } from "react-icons/fa";

class Nav extends Component {
  render() {
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
              <a href="/main-eunjin" title="home">
                <img
                  className="firstIcon"
                  src="images/eunjinbaek/instaHomeIcon.png"
                />
              </a>
              <a href="/main-eunjin" title="DM">
                <img className="icons" src="images/eunjinbaek/dmicon.png" />
              </a>
              <a href="/main-eunjin" title="explore">
                <img
                  className="icons"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                />
              </a>
              <a href="/main-eunjin" title="like">
                <img
                  className="icons"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
              </a>
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
