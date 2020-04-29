import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      botCollection: [],
      botArmy: [],
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(bots => {
        const updatedBots = bots.map(bot => {
          bot.isEnlisted = false
          return bot
        })
        this.setState({
          botCollection: updatedBots
        })
      })
  }

  handleEnlistBot(id) {
    const updatedBotCollection = this.state.botCollection.map(bot => {
      if (bot.id === id) {
        return {
          ...bot,
          isEnlisted: true
        }
      } else {
        return bot
      }
    })
    const updatedBotArmy = updatedBotCollection.filter(bot => bot.isEnlisted === true)
    this.setState({
      botCollection: updatedBotCollection,
      botArmy: updatedBotArmy
    })
  }

  handleDischargeBot(id) {
    const updatedBotCollection = this.state.botCollection.map(bot => {
      if (bot.id === id) {
        return {
          ...bot,
          isEnlisted: false
        }
      } else {
        return bot
      }
    })
    const updatedBotArmy = updatedBotCollection.filter(bot => bot.isEnlisted === true)
    this.setState({
      botCollection: updatedBotCollection,
      botArmy: updatedBotArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} dischargeCallback={(id) => this.handleDischargeBot(id)}/>
        <BotCollection botCollection={this.state.botCollection} enlistCallback={(id) => this.handleEnlistBot(id)}/>
      </div>
    );
  }

}

export default BotsPage;
