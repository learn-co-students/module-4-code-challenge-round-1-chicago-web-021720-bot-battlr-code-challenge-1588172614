import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderBots = () => {
    return this.props.bots.map(bot => <BotCard bot={bot} handleClick={this.props.handleUnenlist}/>)
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
