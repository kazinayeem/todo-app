import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    title: "",
    body: "",
  };
  change = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  submitHander = (e) => {
    e.preventDefault();
    this.props.todoadd(this.state);
  };
  render() {
    return (
      <div className="container">
        <h1>todos</h1>

        <form onSubmit={this.submitHander} className="form-group">
          <input
            name="title"
            type="text"
            onChange={this.change}
            className="form-control"
            placeholder="Title"
          />
          <br />
          <input
            name="body"
            type="text"
            onChange={this.change}
            className="form-control"
            placeholder="Title"
          />
          <br />

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
