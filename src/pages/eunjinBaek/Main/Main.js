import React, { Component } from "react";
import Nav from "../../../components/Nav/Nav";
import "./Main.scss";
import ListOfComment from "./Components/ListOfComment/ListOfComment";
import { FaAppStoreIos } from "react-icons/fa";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      myUserName: "jean.baek.kor",
      inputValue: "",
      btnColor: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/eunjinbaek/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          comments: res.data,
        });
      });
  }

  inputComment = async (event) => {
    const { value } = event.target;
    await this.setState({ inputValue: value });

    if (value.length > 0) {
      this.setState({ btnColor: true });
    } else {
      this.setState({ btnColor: false });
    }
  };

  clickComment = (event) => {
    event.preventDefault();
    const { myUserName, inputValue, comments } = this.state;
    const newComment = {
      id: Date.now(),
      userName: myUserName,
      content: inputValue,
    };

    if (inputValue.length > 0) {
      this.setState({
        comments: [...comments, newComment],
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
    const STORIES = [
      {
        id: 1,
        src: "images/eunjinbaek/flower.jpg",
        alt: "der_andere_weg님의 프로필 사진",
        userID: "der_andere_weg",
      },
      {
        id: 2,
        src: "images/eunjinbaek/flower.jpg",
        alt: "der_andere_weg님의 프로필 사진",
        userID: "der_andere_weg",
      },
      {
        id: 3,
        src: "images/eunjinbaek/flower.jpg",
        alt: "der_andere_weg님의 프로필 사진",
        userID: "der_andere_weg",
      },
      {
        id: 4,
        src: "images/eunjinbaek/flower.jpg",
        alt: "der_andere_weg님의 프로필 사진",
        userID: "der_andere_weg",
      },
      {
        id: 5,
        src: "images/eunjinbaek/flower.jpg",
        alt: "der_andere_weg님의 프로필 사진",
        userID: "der_andere_weg",
      },
      {
        id: 6,
        src: "images/eunjinbaek/flower.jpg",
        alt: "der_andere_weg님의 프로필 사진",
        userID: "der_andere_weg",
      },
      {
        id: 7,
        src: "images/eunjinbaek/flower.jpg",
        alt: "der_andere_weg님의 프로필 사진",
        userID: "der_andere_weg",
      },
      {
        id: 8,
        src: "images/eunjinbaek/flower.jpg",
        alt: "der_andere_weg님의 프로필 사진",
        userID: "der_andere_weg",
      },
    ];

    const FOLLOWINGOFUSERS = [
      {
        id: 1,
        src: "images/eunjinbaek/flower.jpg",
        alt: "Following User",
        userID: "elon_musk",
        des: "회원님을 팔로우합니다",
      },
      {
        id: 2,
        src: "images/eunjinbaek/flower.jpg",
        alt: "Following User",
        userID: "elon_musk",
        des: "회원님을 팔로우합니다",
      },
      {
        id: 3,
        src: "images/eunjinbaek/flower.jpg",
        alt: "Following User",
        userID: "elon_musk",
        des: "회원님을 팔로우합니다",
      },
      {
        id: 4,
        src: "images/eunjinbaek/flower.jpg",
        alt: "Following User",
        userID: "elon_musk",
        des: "회원님을 팔로우합니다",
      },
      {
        id: 5,
        src: "images/eunjinbaek/flower.jpg",
        alt: "Following User",
        userID: "elon_musk",
        des: "회원님을 팔로우합니다",
      },
    ];

    const { comments, inputValue, btnColor } = this.state;
    return (
      <div className="MainEunjin">
        <Nav />
        <main>
          <section>
            <div className="feeds">
              <div className="storybox">
                <div className="stories">
                  <div>
                    <ul>
                      {STORIES.map((story) => {
                        return (
                          <li>
                            <div>
                              <img
                                key={story.id}
                                src={story.src}
                                alt={story.alt}
                              />
                              <div>{story.userID}</div>
                            </div>
                          </li>
                        );
                      })}
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
                          alt="user profile"
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
                            className={
                              comments.length
                                ? "actOfReplyNums"
                                : "deactOfReplyNums"
                            }
                          >
                            댓글 <span>{comments.length}</span>개 모두 보기
                          </div>
                          <div className="replyContainer">
                            <ul className="replyList">
                              {comments.map((comment, i) => (
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
                            value={inputValue}
                            type="text"
                            placeholder="댓글 달기..."
                            name="comment"
                          />
                          <button
                            onClick={this.clickComment}
                            type="submit"
                            className={btnColor ? "activated" : "deactivated"}
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
                    {FOLLOWINGOFUSERS.map((follow) => {
                      return (
                        <li>
                          <span className="imgAndStr">
                            <img
                              key={follow.id}
                              src={follow.src}
                              alt={follow.alt}
                            />
                            <span>
                              <div>{follow.userID}</div>
                              <div>{follow.des}</div>
                            </span>
                          </span>
                          <span className="follow">팔로우</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <footer className="mainRightFooter">
                  <div>
                    소개 · 도움말 · 홍보 센터 · API · 채용 정보 ·
                    개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그 · 언어
                  </div>
                  <br />
                  <div>© 2020 INSTAGRAM FROM FACEBOOK</div>
                </footer>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
