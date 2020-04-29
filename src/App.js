import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  constructor(props){
    super()
    this.state = {
      bots: [],
      enlistedBots: []
    }
    this.enlistBot = this.enlistBot.bind(this);
    this.removeEnlistedBot = this.removeEnlistedBot.bind(this);
  }
  componentDidMount(){
    this.fetchBots()
  }

  enlistBot = id => {
    console.log(id);
    if(this.state.enlistedBots.find(bot => bot.id === id)){

       this.removeEnlistedBot(id);
     }
     else {
       const newbot = this.state.bots.find(bot => bot.id === id);
       this.setState(Object.assign({},this.state,{enlistedBots: [...this.state.enlistedBots, newbot]}));
     }
  }

   removeEnlistedBot = id => {
     return this.setState(Object.assign({},
                        this.state,
                        {enlistedBots: this.state.enlistedBots.filter(bot => bot.id !== id)}
                        ))
   }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response=>response.json())
      .then(data => {
        this.setState(Object.assign({},this.state,{bots:Array.from(data)}))
      });
  }
  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} enlistBot={this.enlistBot} enlistedBots={this.state.enlistedBots} removeEnlistedBots={this.removeEnlistedBots} />
      </div>
    );
  }
}

export default App;
