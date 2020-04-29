import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  constructor() {
    super()
    this.renderBot = this.renderBot.bind(this)
		this.renderBots = this.renderBots.bind(this)
	}	

	renderBot(bot) {
		return <BotCard bot={bot} handleClick={this.props.handleArmyBotClick}/>
	}

	renderBots() {
		return this.props.bots.map(this.renderBot)
  }
  
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
