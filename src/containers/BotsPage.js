import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      botCollection: [],
      botArmy: [],
      spec: false
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

  handleEnlistBot(isEnlisted, id) {
    const updatedBotCollection = this.state.botCollection.map(bot => {
      if (bot.id === id) {
        return {
          ...bot,
          isEnlisted: isEnlisted
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

  handleSpec(bot) {
    this.setState({
      spec: bot
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} dischargeCallback={(isEnlisted, id) => this.handleEnlistBot(isEnlisted, id)}/>
        <BotCollection botCollection={this.state.botCollection} enlistCallback={(isEnlisted, id) => this.handleEnlistBot(isEnlisted, id)} specCallback={(bot) => this.handleSpec(bot)} spec={this.state.spec}/>
      </div>
    );
  }

}

export default BotsPage;
