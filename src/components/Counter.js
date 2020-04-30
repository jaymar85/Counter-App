import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      value: this.props.value,
    };
    // this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = () => {
    // console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement();
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  // Span
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
