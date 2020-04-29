import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  constructor() {
    super()

    this.state = {
      bots: [],
      selectedBot: undefined,
      filter: 'All',
      sort: 'health'
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

  handleClickBot = bot => {
    this.setState({
      selectedBot: bot
    })
  }

  handleGoBack = () => {
    this.setState({
      selectedBot: undefined
    })
  }

  toggleEnlisted = id => {
    const updatedBots = this.state.bots.map(bot => {
      if(bot.id === id) {
        return {
          ...bot,
          enlisted: !bot.enlisted
        }
      } else {
        return bot
      }
    })

    this.setState({
      bots: updatedBots,
      selectedBot: undefined
    })
  }



  handleChangeClass = e => {
    this.setState({
      filter: e.target.value
    })
  }

  filterBotsByClass = () => {
    if(this.state.filter === "All") {
      return this.state.bots
    } else {
      return this.state.bots.filter(bot => bot.bot_class === this.state.filter)
    }
  }

  handleChangeSort = e => {
    this.setState({
      sort: e.target.value
    })
  }

  sortBots = bots => {
    return bots.sort((a, b) => {
      return b[this.state.sort] - a[this.state.sort]
    })
  }

  selectBotsToShow = () => {
    const filteredBots = this.filterBotsByClass()
    return this.sortBots(filteredBots)
  }

  render() {
    const botsCollection = this.selectBotsToShow()
    return (
      <div>
        <YourBotArmy
          bots={this.state.bots}
          handleClickBot={this.handleClickBot}
        />
        {this.state.selectedBot ? 
          <BotSpecs
            bot={this.state.selectedBot}
            toggleEnlisted={this.toggleEnlisted}
            handleGoBack={this.handleGoBack}
          />
          :
          <BotCollection
            bots={botsCollection}
            handleClickBot={this.handleClickBot}
            handleChangeClass={this.handleChangeClass}
            handleChangeSort={this.handleChangeSort}
          />
        }
      </div>
    );
  }

}

export default BotsPage;
