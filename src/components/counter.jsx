import React, { Component } from "react";

import "../styles/counter.css";

// Controled component

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.counter.value, this.props.counter.value)
  }

  componentWillUnmount() {
    // console.log('unmount')
  }

  getBadgeClasses = () => {
    let classes = "btn mx-2 btn-";

    return this.props.counter.value === 0
      ? classes + "warning"
      : classes + "primary";
  };

  render = () => {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  };
}

export default Counter;
