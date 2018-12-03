import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  // loads after component mounts
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }

  // // loads before component mounts
  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // // loads when component updates
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // componentWillRecieveProps() {
  //   console.log('componentWillRecieveProps');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="display-4">{title}</h1>
        <p className="lead">{body}</p>
      </div>
    );
  }
}

export default Test;
