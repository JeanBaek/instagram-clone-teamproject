import React, { Component } from "react";
import "./ListOfComment.scss";

class ListOfComment extends Component {
  render() {
    return (
      <li>
        <div>
          <span>{this.props.comment.nickname} </span>
          <span>{this.props.comment.content}</span>
        </div>
        <div>
          <button
            id={this.props.comment.id}
            className="delButton"
            comment={{ comment: this.props.comment }}
            onClick={this.props.delComment}
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
