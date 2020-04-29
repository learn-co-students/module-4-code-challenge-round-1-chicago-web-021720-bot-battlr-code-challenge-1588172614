import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"


class BotsPage extends React.Component {

  constructor() {
    super()
    
    this.state = {
      allBots: [],
      armyBots: [],
      showBot: null
    }

    this.fetchBots = this.fetchBots.bind(this)
    this.handleIndexBotClick = this.handleIndexBotClick.bind(this)
    this.handleArmyBotClick = this.handleArmyBotClick.bind(this)
    this.handleGoBackClick = this.handleGoBackClick.bind(this)
    this.handleEnlistClick = this.handleEnlistClick.bind(this)
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
    // When a bot is clicked on in the index, make that bot the `showBot`
    this.setState({
      showBot: bot
    })
  }

  handleArmyBotClick(bot) {
    // Remove the bot from the army
    this.setState(prevState => {
      return {
        armyBots: prevState.armyBots.filter(armyBot => armyBot.id !== bot.id)
      }
    })
  }

  handleGoBackClick() {
    // Set the showBot to null
    this.setState({
      showBot: null
    })
  }

  handleEnlistClick(bot) {
    // Don't allow adding duplicate bots to the army
    if (this.state.armyBots.find(armyBot => armyBot.id === bot.id )) {
      alert('That bot is already in your army!')
      return
    }

    // Add the bot to the army, and go back to the index
    this.setState(prevState => {
      return {
        armyBots: [...prevState.armyBots, bot],
        showBot: null
      }
    })
  }

  render() {
    const { allBots, armyBots, showBot } = this.state
    return (
      <div>
        <YourBotArmy bots={armyBots} handleArmyBotClick={this.handleArmyBotClick}/>
        {showBot ? 
          <BotSpecs bot={showBot} handleGoBackClick={this.handleGoBackClick} handleEnlistClick={this.handleEnlistClick}/> 
          : 
          <BotCollection bots={allBots} handleIndexBotClick={this.handleIndexBotClick}/>
        }
      </div>
    );
  }

}

export default BotsPage;
