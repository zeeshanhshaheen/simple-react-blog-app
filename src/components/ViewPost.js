import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import CommentInput from "./comment/CommentInput";
import CommentList from "./comment/CommentList";
export class ViewPost extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    // console.log(newItem);
    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    const getID = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: getID,
    });
  };

  handleEdit = (id) => {
    const getID = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    console.log(selectedItem);

    this.setState({
      items: getID,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };
  render() {
    return (
      <div className="container mt-5 mb-4">
        <h3>Post Description</h3>
        <div className=" mt-5 card">
          <div className="card-text m-5">
            <h5>{this.props.location.name}</h5>
          </div>
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <CommentList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />

              <CommentInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPost;
