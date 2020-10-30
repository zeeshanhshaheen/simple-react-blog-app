import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AddItem from "./AddItem";
import ViewPost from "./ViewPost";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <Home
                  items={this.props.items}
                  onDelete={this.props.onDelete}
                  onView={this.props.onView}
                  {...props}
                />
              );
            }}
          />
          <Route
            path="/add"
            render={(props) => {
              return <AddItem onAdd={this.props.onAdd} {...props} />;
            }}
          />
          <Route
            path="/view_post/:id"
            items={this.props.items}
            component={ViewPost}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
