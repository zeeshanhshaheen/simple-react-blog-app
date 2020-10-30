import React, { Component } from "react";
import Item from "./Item";

class Home extends Component {
  render() {
    let items = this.props.items.map((item) => {
      return (
        <Item
          className="item-child"
          key={item.id}
          item={item}
          onDelete={this.props.onDelete}
          onView={this.props.onView}
        />
      );
    });
    return (
      <div className="container mt-5">
        <h1 className="text-center">All Posts</h1>
        <div className="item-container">{items}</div>
      </div>
    );
  }
}

export default Home;
