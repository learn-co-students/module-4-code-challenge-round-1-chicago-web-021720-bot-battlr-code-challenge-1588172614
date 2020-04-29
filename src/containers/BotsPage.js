import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      allBots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(response => {

      const updatedResponse = response.map(bot => {
        return {...bot, inArmy: false}
      })

      console.log(updatedResponse)

      this.setState({
        allBots: updatedResponse
      })
    })
  }

  onNotArmyCardClick = armyBot => {
    const newAllBots = this.state.allBots.map(bot => {
      if (bot === armyBot) {
        return {...bot, inArmy: true}
      } else {
        return bot
      }
    })

    this.setState(prevState => ({
      allBots: newAllBots
    }))
  }

  onArmyCardClick = armyBot => {
    const newAllBots = this.state.allBots.map(bot => {
      if (bot === armyBot) {
        return {...bot, inArmy: false}
      } else {
        return bot
      }
    })

    this.setState(prevState => ({
      allBots: newAllBots
    }))

  }

  render() {
    return (
      <div>
        <YourBotArmy allBots={this.state.allBots} onArmyCardClick={this.onArmyCardClick}/>
        <BotCollection allBots={this.state.allBots} onNotArmyCardClick={this.onNotArmyCardClick}/>
      </div>
    );
  }

}

export default BotsPage;
