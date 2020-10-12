import React, { Component } from "react";
import Nav from "../../../components/Nav/Nav";
import "./Main.scss";
import ListOfComment from "./Components/ListOfComment/ListOfComment";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      comments: [
        { id: 1, nickname: "sunny_deoggy", content: "하니 넘귀엽햐" },
        { id: 2, nickname: "dooreplay", content: "댕댕we에도 올려줘여!!" },
        { id: 3, nickname: "mmoonnddo", content: "귀여워ㅠㅠ" },
      ],
      myNickname: "jean.baek.kor",
      inputValue: "",
      btnColor: "rgb(192,223,253)",
    };
  }

  inputComment = async (event) => {
    const { value } = event.target;
    await this.setState({ inputValue: value });

    if (value.length > 0) {
      this.setState({ btnColor: "rgb(0,149,246)" });
    } else {
      this.setState({ btnColor: "rgb(192,223,253)" });
    }
  };

  clickComment = (event) => {
    event.preventDefault();
    const newComment = {
      id: Date.now(),
      nickname: this.state.myNickname,
      content: this.state.inputValue,
    };

    if (this.state.inputValue.length > 0) {
      this.setState({
        comments: [...this.state.comments, newComment],
      });

      this.setState({
        inputValue: "",
      });
    }
  };

  delComment = (e) => {
    const filtering = this.state.comments.filter((comment) => {
      return comment.id !== Number(e.target.id);
    });

    this.setState({
      comments: [...filtering],
    });
  };

  render() {
    return (
      <div className="Main">
        <Nav />
        <main>
          <section>
            <div className="feeds">
              <div className="storybox">
                <div className="stories">
                  <div>
                    <ul>
                      <li>
                        <div>
                          <img
                            src="images/eunjinbaek/flower.jpg"
                            alt="der_andere_weg님의 프로필 사진"
                          />
                          <div>der_andere_weg</div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="images/eunjinbaek/flower.jpg"
                            alt="der_andere_weg님의 프로필 사진"
                          />
                          <div>flower</div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="images/eunjinbaek/flower.jpg"
                            alt="der_andere_weg님의 프로필 사진"
                          />
                          <div>flower</div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="images/eunjinbaek/flower.jpg"
                            alt="der_andere_weg님의 프로필 사진"
                          />
                          <div>flower</div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="images/eunjinbaek/flower.jpg"
                            alt="der_andere_weg님의 프로필 사진"
                          />
                          <div>flower</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="postContainer">
                <div className="postBox">
                  <article>
                    <header>
                      <div className="userImgOfArticle">
                        <img
                          src="images/eunjinbaek/westaUserImg.jpg"
                          alt="user profile image"
                        />
                      </div>
                      <div className="userNameAndMore">
                        <a href="https://www.instagram.com/">jean.baek.kor</a>
                      </div>
                    </header>
                    <div className="mainImgAndIcons">
                      <img src="/images/eunjinbaek/yeoul2.jpeg" alt="여울이" />
                    </div>
                    <div className="belowSquarePhoto">
                      <div className="iconsInArticle">
                        <div>
                          <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                            alt="postLike"
                          />
                          <img
                            src="images/eunjinbaek/postCommentIcon.png"
                            alt="postReply"
                          />
                          <img
                            src="images/eunjinbaek/dmicon.png"
                            alt="postDM"
                          />
                        </div>
                        <div>
                          <img
                            src="images/eunjinbaek/postBookmarkIcon.png"
                            alt="postBookmark"
                          />
                        </div>
                      </div>
                      <section className="likedNums">
                        <div>
                          좋아요 <span> 79</span>개
                        </div>
                      </section>
                      <div className="feedStringBox">
                        <div className="postingMemo">
                          <span>jean.baek.kor</span>
                          <span>🤍🤍 #westargram</span>
                        </div>
                        <div className="repliesOfPosting">
                          <div
                            className="replyNums"
                            style={{
                              display: this.state.comments.length
                                ? "block"
                                : "none",
                            }}
                          >
                            댓글 <span>{this.state.comments.length}</span>개
                            모두 보기
                          </div>
                          <div className="replyContainer">
                            <ul className="replyList">
                              {this.state.comments.map((comment, i) => (
                                <ListOfComment
                                  comment={comment}
                                  key={i}
                                  delComment={this.delComment}
                                />
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="uploadedTime">
                        <span>1시간 전</span>
                      </div>
                      <section className="typingReplyBox">
                        <form className="writeReply">
                          <input
                            onChange={this.inputComment}
                            value={this.state.inputValue}
                            type="text"
                            className="replyInput"
                            placeholder="댓글 달기..."
                            name="comment"
                          />
                          <button
                            onClick={this.clickComment}
                            type="submit"
                            className="replyButton"
                            style={{ color: this.state.btnColor }}
                          >
                            게 시
                          </button>
                        </form>
                      </section>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="mainRight">
              <div className="mainRightBox">
                <div className="mainRightUserInfo">
                  <span>
                    <img
                      src="/images/eunjinbaek/westaUserImg.jpg"
                      alt="jean.baek.kor님의 프로필 사진"
                    />
                  </span>
                  <span className="mainRightUserName">
                    <div>jean.baek.kor</div>
                    <div>백은진 白恩珍</div>
                  </span>
                </div>
                <div className="recommendationsForUser">
                  <div className="str">
                    <div>회원님을 위한 추천</div>
                    <div>모두 보기</div>
                  </div>
                  <ul>
                    <li>
                      <span className="imgAndStr">
                        <img src="images/eunjinbaek/flower.jpg" alt="" />
                        <span>
                          <div>elon_musk</div>
                          <div>회원님을 팔로우합니다</div>
                        </span>
                      </span>
                      <span className="follow">팔로우</span>
                    </li>
                    <li>
                      <span className="imgAndStr">
                        <img src="images/eunjinbaek/flower.jpg" alt="" />
                        <span>
                          <div>elon_musk</div>
                          <div>회원님을 팔로우합니다</div>
                        </span>
                      </span>
                      <span className="follow">팔로우</span>
                    </li>
                    <li>
                      <span className="imgAndStr">
                        <img src="images/eunjinbaek/flower.jpg" alt="" />
                        <span>
                          <div>elon_musk</div>
                          <div>회원님을 팔로우합니다</div>
                        </span>
                      </span>
                      <span className="follow">팔로우</span>
                    </li>
                    <li>
                      <span className="imgAndStr">
                        <img src="images/eunjinbaek/flower.jpg" alt="" />
                        <span>
                          <div>elon_musk</div>
                          <div>회원님을 팔로우합니다</div>
                        </span>
                      </span>
                      <span className="follow">팔로우</span>
                    </li>
                    <li>
                      <span className="imgAndStr">
                        <img src="images/eunjinbaek/flower.jpg" alt="" />
                        <span>
                          <div>elon_musk</div>
                          <div>회원님을 팔로우합니다</div>
                        </span>
                      </span>
                      <span className="follow">팔로우</span>
                    </li>
                  </ul>
                </div>
                <div className="mainRightFooter">
                  <div>
                    소개 · 도움말 · 홍보 센터 · API · 채용 정보 ·
                    개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그 · 언어
                  </div>
                  <br />
                  <div>© 2020 INSTAGRAM FROM FACEBOOK</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
