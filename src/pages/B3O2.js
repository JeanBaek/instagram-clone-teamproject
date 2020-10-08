import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class B3O2 extends Component {
  render() {
    return (
      <div className="B3O2">
        <h1>B3O2</h1>
        <ul>
          <li>
            <Link to="/login-suhyun">임수현의 로그인 페이지</Link>
          </li>
          <li>
            <Link to="/login-hyojeong">홍효정의 로그인 페이지</Link>
          </li>
          <li>
            <Link to="/login-yeonjeong">조연정의 로그인 페이지</Link>
          </li>
          <li>
            <Link to="/login-eunjin">백은진의 로그인 페이지</Link>
          </li>
          <li>
            <Link to="/login-bogyeong">김보경의 로그인 페이지</Link>
          </li>
        </ul>
      </div>
    );
  }
}
