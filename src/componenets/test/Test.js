import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };
  //Lifecycle methods
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          title: json.title,
          body: json.body,
        })
      );
  } // Triggers action as soon as the component fires up
  //   componentWillMount() {
  //     console.log("componentWillmount");
  //   } //Triggers actions before the components fires up
  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   } //Triggers actions after the component updates or changes

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("ComponentWillReceiveProps");
  //   } //Triggers actions when the component receives new properties. Often used with redux. The new component will be received in the nextProps argument

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }
  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate..");
  //   }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
