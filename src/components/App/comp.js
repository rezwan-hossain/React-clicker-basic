import React, { Component } from "react";
import "./comp.style.scss";
import { Container } from "react-grid-system";

class App extends Component {
  constructor(prpos) {
    super(prpos);

    this.state = { click: 0 };
  }

  onCowClick() {
    this.setState(prevState => {
      prevState.click += 1;

      // or
      //click: this.state.click + 1
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="text">
          Clicks:{this.state.click}
        </div>
        <button
          onClick={this.onCowClick.bind(this)}
          className="btn btn-2 btn-2a"
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
