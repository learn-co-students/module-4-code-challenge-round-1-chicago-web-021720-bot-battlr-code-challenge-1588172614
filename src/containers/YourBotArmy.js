import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  enlistedBots = () => {
    return this.props.bots.filter(bot => bot.enlisted === true)
  }

  renderBots = () => {
    return this.enlistedBots().map(bot => {
      return <BotCard key={bot.id} bot={bot} handleClickBot={this.props.handleClickBot}/>
    })
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
