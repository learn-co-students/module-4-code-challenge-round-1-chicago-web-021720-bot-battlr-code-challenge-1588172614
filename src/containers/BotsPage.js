import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      allBots: [],
      botArmy: [],
      showCollection: true,
      showBot: {}
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
    this.setState({
      allBots: newAllBots,
      showCollection: true
    })
  }

  onArmyCardClick = armyBot => {
    const newAllBots = this.state.allBots.map(bot => {
      if (bot === armyBot) {
        return {...bot, inArmy: false}
      } else {
        return bot
      }
    })
    this.setState({
      allBots: newAllBots,
    })
  }

  showBotSpecs = clickedBot => {
    this.setState({
      showCollection: false,
      showBot: clickedBot
    })
  }

  goBack = () => {
    this.setState({
      showCollection: true
    })
  }

  render() {
    return (
      <div>
        {this.state.showCollection ? 
          <div>
            <YourBotArmy allBots={this.state.allBots} onArmyCardClick={this.onArmyCardClick}/>
            <BotCollection allBots={this.state.allBots} showBotSpecs={this.showBotSpecs} />
          </div>
          : <BotSpecs bot={this.state.showBot} goBack={this.goBack} onNotArmyCardClick={this.onNotArmyCardClick}/>
        }
      </div>
    );
  }

}

export default BotsPage;
