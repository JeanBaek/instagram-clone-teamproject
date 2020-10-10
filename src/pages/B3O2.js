import React from "react";
import { Link } from "react-router-dom";

class B3O2 extends React.Component {
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

export default B3O2;
