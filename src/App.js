import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"

export default class App extends Component {

  componentDidMount() {
    fetch(url)
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        
      })
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}