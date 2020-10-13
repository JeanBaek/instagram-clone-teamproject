import React, { Component } from "react";
import "./ListOfComment.scss";

class ListOfComment extends Component {
  render() {
    const { comment, delComment } = this.props;
    return (
      <li>
        <div>
          <span>{comment.userName} </span>
          <span>{comment.content}</span>
        </div>
        <div>
          <button
            id={comment.id}
            className="delButton"
            comment={{ comment: comment }}
            onClick={delComment}
          >
            Del
          </button>
          <button className="likeButton">Like</button>
        </div>
      </li>
    );
  }
}

export default ListOfComment;
