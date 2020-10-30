import React, { Component } from "react";
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(e) {
    this.props.onAdd(e);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className=" container mt-5">
        <h3>Create New Post</h3>
        <br />
        <form onSubmit={this.onAdd}>
          <div className="input-group">
            <textarea
              className="form-control text-capitalie"
              rows="5"
              col="2"
              placeholder="Write Something..."
              required
            />
          </div>

          <button className="btn btn-dark mt-3">Add Post</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
