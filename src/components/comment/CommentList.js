import React, { Component } from "react";

import Comment from "./Comment";
class CommentList extends Component {
  render() {
    const { items, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Comments</h3>
        {items.map((item) => {
          return (
            <Comment
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default CommentList;
