import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor() {
    super()

    this.state = {
      bots: []
    }
  }
  
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => {
        const updatedBots = bots.map(bot => ({...bot, enlisted: false}))

        this.setState({
          bots: updatedBots
        })
      })
  }

  handleEnlist = id => {
    const updatedBots = this.state.bots.map(bot => {
      if(bot.id === id) {
        return {
          ...bot,
          enlisted: true
        }
      } else {
        return bot
      }
    })

    this.setState({
      bots: updatedBots
    })
  }

  handleUnenlist = id => {
    const updatedBots = this.state.bots.map(bot => {
      if(bot.id === id) {
        return {
          ...bot,
          enlisted: false
        }
      } else {
        return bot
      }
    })

    this.setState({
      bots: updatedBots
    })
  }

  enlistedBots = () => {
    return this.state.bots.filter(bot => bot.enlisted === true)
  }

  // unenlistedBots = () => {
  //   return this.state.bots.filter(bot => bot.enlisted === false)
  // }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.enlistedBots()}
          handleUnenlist={this.handleUnenlist}
        />
        <BotCollection
          bots={this.state.bots}
          handleEnlist={this.handleEnlist}
        />
      </div>
    );
  }

}

export default BotsPage;
