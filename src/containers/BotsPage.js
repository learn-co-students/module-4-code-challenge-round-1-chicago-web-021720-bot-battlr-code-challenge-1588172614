import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"
import BotFilter from "../components/BotFilter"


class BotsPage extends React.Component {

  constructor() {
    super()
    
    this.state = {
      allBots: [],
      armyBots: [],
      showBot: null,
      botClasses: [],
      filters: {
        bot_class: null
      }
    }

    this.fetchBots = this.fetchBots.bind(this)
    this.handleIndexBotClick = this.handleIndexBotClick.bind(this)
    this.handleArmyBotClick = this.handleArmyBotClick.bind(this)
    this.handleGoBackClick = this.handleGoBackClick.bind(this)
    this.handleEnlistClick = this.handleEnlistClick.bind(this)
    this.getFilteredBots = this.getFilteredBots.bind(this)
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
  }

  fetchBots() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => {

        this.setState({
          allBots: bots,
          botClasses: [...new Set(bots.map(bot => bot.bot_class))]  // Distinct bot classes (for filtering)
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

  getFilteredBots() {
    // Get the bots to display in the index view based on filters
    const { allBots, filters }  = this.state
    let filteredBots = allBots

    for (let filterName of Object.keys(filters)) {
      const filterValue = filters[filterName]
      if (filterValue !== null) {
        filteredBots = filteredBots.filter(bot => bot[filterName] === filterValue)
      }
    }

    return filteredBots
  }

  handleFilterSubmit(event, newFilters) {
    event.preventDefault()
    this.setState(prevState => {
      return {
        filters : {
          ...prevState.filters,
          ...newFilters
        }
      }
    })
  }

  render() {
    const { armyBots, showBot, botClasses } = this.state
    return (
      <div>
        <YourBotArmy bots={armyBots} handleArmyBotClick={this.handleArmyBotClick}/>
        <BotFilter botClasses={botClasses} handleFilterSubmit={this.handleFilterSubmit}/>
        {showBot ? 
          <BotSpecs bot={showBot} handleGoBackClick={this.handleGoBackClick} handleEnlistClick={this.handleEnlistClick}/> 
          : 
          <BotCollection bots={this.getFilteredBots()} handleIndexBotClick={this.handleIndexBotClick}/>
        }
      </div>
    );
  }

}

export default BotsPage;
