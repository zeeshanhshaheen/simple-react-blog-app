import React, { Component } from "react";

class CommentInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <textarea
              type="text"
              className="form-control text-capitalize"
              placeholder="Add comment"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark mt-3">
            {editItem ? "Edit Comment" : "Add Comment"}
          </button>
        </form>
      </div>
    );
  }
}

export default CommentInput;
