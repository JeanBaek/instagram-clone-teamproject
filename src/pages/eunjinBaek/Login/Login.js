import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      backgroundColor: "rgb(192,223,253)",
    };
  }

  goToMain = () => {
    this.state.id.includes("@") && this.state.pw.length >= 8
      ? this.props.history.push("/main-eunjin")
      : alert("올바른 로그인 정보를 입력해주세요.");
  };

  handleInput = async (event) => {
    const { name, value } = event.target;
    await this.setState({
      [name]: value,
    });

    const { id, pw } = this.state;
    id.includes("@") && pw.length >= 8
      ? this.setState({ backgroundColor: "rgb(0,149,246)" })
      : this.setState({ backgroundColor: "rgb(192,223,253)" });
  };

  render() {
    return (
      <div className="Login">
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
                  style={{ backgroundColor: this.state.backgroundColor }}
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
