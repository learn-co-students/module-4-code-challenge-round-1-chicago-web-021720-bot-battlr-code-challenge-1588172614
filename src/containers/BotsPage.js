import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      bots: [],
      armyBots: [],
      //to refactor prob move sort state into BotCollection
      isSortedByType: false,
      sortByType: []
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => {
      const updatedBots = bots.map(bot=> {
        return {isArmy: false, isFlipped: false, ...bot}
      })
      const sortByType = bots.sort((a, b) => {
        return (a.bot_class > b.bot_class) ? 1 : -1
        })

      this.setState({ 
        bots: updatedBots,
        sortByType: sortByType
      })
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

  toggleSortBotsByType = () => {
    this.setState(prevState => ({
      isSortedByType: !prevState.isSortedByType
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.armyBots} 
        updateIsArmy={this.updateIsArmy} 
        updateIsFlipped={this.updateIsFlipped}
        />
        <BotCollection bots={this.state.bots} 
        updateIsArmy={this.updateIsArmy} 
        updateIsFlipped={this.updateIsFlipped}

        // next three props for sorting by type
        isSortedByType={this.state.isSortedByType}
        sortByType={this.state.sortByType}
        toggleSortBotsByType={this.toggleSortBotsByType}
        />
      </div>
    );
  }

}

export default BotsPage;
