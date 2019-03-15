import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    invasions: []
  };

  componentDidMount() {
    axios.get("https://www.toontownrewritten.com/api/invasions").then(res => {
      this.setState({
        invasions: Object.entries(res.data.invasions)
      });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.invasions.map(district => {
            return (
              <li key={district[0]}>
                Invasion in {district[0]}!<br />
                {district[1].type}s have taken over
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
