import React, { Component } from "react";
import Todo from "./Todo";

export default class App extends Component {
  state = {
    todos: [
      { title: "title", body: "body" },
      { title: "title1", body: "body1" },
      { title: "title2", body: "body2" },
    ],
    search: "",
  };

  todoadd = (user) => {
    this.setState({
      todos: [...this.state.todos, user],
    });
  };

  search = (e) => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  searchterm = () => {
    return this.state.todos.filter((todo) =>
      todo.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
  };

  delete = (title) => {
    const deltitle = this.state.todos.filter(todo => todo.title !== title);
    this.setState({
      todos : deltitle
    })
      console.log(deltitle);
  }
  render() {
    let todo = this.searchterm();

    return (
      <div className="container row">
        <Todo todoadd={this.todoadd} />
        <br />
        <br />
        <input
          className="form-control col-sm-8 col-10"
          type="text"
          name="search"
          onChange={this.search}
        />


        {todo.length === 0 ? (
          <h1>no data</h1>
        ) : (
          todo.map((todo) => (
            <ul onClick={() => this.delete(todo.title)} key={Math.random()} className="list-group-item m-3 text-center h3 bg-danger">
              <li className="list-group">{todo.title}</li>
              <li className="list-group">{todo.body}</li>
            </ul>
          ))
        )}
      </div>
    );
  }
}
