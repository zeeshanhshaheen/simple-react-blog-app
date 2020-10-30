import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.item);
  }
  render() {
    return (
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-text">{this.props.item.name}</h5>
          </div>

          <div className="d-flex">
            <div className=" ml-3 mb-3">
              <button className="btn btn-dark mt-3" onClick={this.onDelete}>
                Delete
              </button>
            </div>
            <div className="ml-3">
              <Link
                className="btn btn-dark mt-3"
                to={{
                  pathname: `/view_post/${this.props.item.id}`,
                  name: this.props.item.name,
                  onView: this.onView,
                }}
              >
                View Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
