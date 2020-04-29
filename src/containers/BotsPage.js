import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      bots: [],
      armyBots: []
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => {
      const updatedBots = bots.map(bot=> {
        return {isArmy: false, isFlipped: false, ...bot}
      })
      this.setState({ bots: updatedBots })
    })
  }

  updateIsArmy = id => {
    const updatedBots = this.state.bots.map(bot => {
      if (bot.id === id){
        bot.isArmy = !bot.isArmy
        return bot
      }
      return bot
    })
    const armyBots = this.state.bots.filter(bot => {
      return bot.isArmy
    })
    this.setState({
      bots: updatedBots,
      armyBots: armyBots
    })
  }

  updateIsFlipped = id => {
    console.log(id)
    const updatedBots = this.state.bots.map(bot => {
      if (bot.id === id){
        bot.isFlipped = !bot.isFlipped
        return bot
      }
      return bot
    })
    this.setState({
      bots: updatedBots
    })
  }



  render() {
    console.log(this.state.bots)
    return (
      <div>
        <YourBotArmy bots={this.state.armyBots} updateIsArmy={this.updateIsArmy} updateIsFlipped={this.updateIsFlipped}/>
        <BotCollection bots={this.state.bots} updateIsArmy={this.updateIsArmy} updateIsFlipped={this.updateIsFlipped}/>
      </div>
    );
  }

}

export default BotsPage;
