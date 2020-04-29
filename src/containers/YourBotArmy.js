import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderBotArmy = () => {
    return this.props.allBots.map(bot => {
			if (bot.inArmy) {
				return <BotCard bot={bot} onCardClick={this.props.onArmyCardClick}/>
			}
		}) 
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderBotArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
