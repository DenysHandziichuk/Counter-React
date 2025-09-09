// App.jsx
import React from "react";
import "./App.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  pluss = () => {
    this.setState({ count: this.state.count + 1 });
  };

  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="app-container">
        <h1>Counter: {this.state.count}</h1>
        <div>
          <button className="counter-btn" onClick={this.pluss}>
            +
          </button>
          <button className="counter-btn" onClick={this.minus}>
            -
          </button>
          <button className="counter-btn" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default function App() {
  return <Counter />;
}
