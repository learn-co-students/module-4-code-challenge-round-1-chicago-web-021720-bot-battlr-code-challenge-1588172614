import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderBotArmy = (army, dischargeCallback) => {
    return army.map(bot => {
      return <BotCard bot={bot} callback={dischargeCallback} />
    })
  }

  render(){
    const { botArmy, dischargeCallback } = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy(botArmy, dischargeCallback)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
