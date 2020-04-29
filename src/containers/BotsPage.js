import React from "react";
import BotCollection from "./BotCollection"


class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    
    this.state = {
      bots: []
    }

    this.fetchBots = this.fetchBots.bind(this)
  }

  fetchBots() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => {
        this.setState({
          bots: bots
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchBots()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <BotCollection bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
