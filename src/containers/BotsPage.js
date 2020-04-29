import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";


class BotsPage extends React.Component {

  constructor() {
    super()
    
    this.state = {
      allBots: [],
      armyBots: []
    }

    this.fetchBots = this.fetchBots.bind(this)
    this.handleIndexBotClick = this.handleIndexBotClick.bind(this)
    this.handleArmyBotClick = this.handleArmyBotClick.bind(this)
  }

  fetchBots() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => {
        this.setState({
          allBots: bots
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchBots()
  }

  handleIndexBotClick(bot) {
    console.log('index bot click', bot)
  }

  handleArmyBotClick(bot) {
    console.log('army bot click', bot)
  }

  render() {
    const { allBots, armyBots } = this.state
    return (
      <div>
        <YourBotArmy bots={armyBots} handleArmyBotClick={this.handleArmyBotClick}/>
        <BotCollection bots={allBots} handleIndexBotClick={this.handleIndexBotClick}/>
      </div>
    );
  }

}

export default BotsPage;
