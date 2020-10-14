import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

// const API = "http://10.58.4.40:8000/user/signup";
const API = "http://10.58.4.40:8000/user/login";
const mobile = "010-1234-1234";
const full_name = "eunjinbaek";
const username = "jean";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      commentBtn: false,
    };
  }

  goToMain = (e) => {
    e.preventDefault();
    const { id, pw } = this.state;
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: pw,
        mobile,
        full_name,
        username,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("백엔드에서 오는 응답 메세지: ", result);
        if (result.MESSAGE === "SUCCESS") {
          this.props.history.push("/main-eunjin");
          localStorage.setItem("token", result.Authorization);
        } else if (result.message === "DUPLICATED_EMAIL") {
          alert("이미 가입된 이메일입니다.");
        } else if (result.message === "PASSWORD INCORRECT") {
          alert("올바른 비밀번호를 입력해주세요.");
        } else {
          alert("올바른 로그인 정보를 입력해주세요.");
        }
      });
  };

  handleInput = async (event) => {
    const { name, value } = event.target;
    await this.setState({
      [name]: value,
    });

    const { id, pw } = this.state;
    id.includes("@", ".") && pw.length >= 8
      ? this.setState({ commentBtn: true })
      : this.setState({ commentBtn: false });
  };

  render() {
    return (
      <div className="LoginEunjin">
        <div className="mainBox">
          <span className="logo">
            <img src="images/eunjinbaek/logo_text.png" alt="instargram_logo" />
          </span>
          <div className="contentsBox">
            <form className="contents">
              <div className="loginBox">
                <input
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  value={this.state.id}
                  onChange={this.handleInput}
                  name="id"
                />
              </div>
              <div className="loginBox">
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={this.state.pw}
                  onChange={this.handleInput}
                  name="pw"
                />
              </div>
              <div className="loginBtn">
                <button
                  onClick={this.goToMain}
                  className={
                    this.state.commentBtn ? "activated" : "deactivated"
                  }
                >
                  로그인
                </button>
              </div>
            </form>
            <a href="https://www.instagram.com/accounts/password/reset/">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
