import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h5>{title}</h5>
        <div>
          <button className="mx-2 btn btn-dark" onClick={handleEdit}>
            EDIT
          </button>
          <button className="mx-2 btn btn-dark" onClick={handleDelete}>
            x
          </button>
        </div>
      </li>
    );
  }
}

export default Comment;
