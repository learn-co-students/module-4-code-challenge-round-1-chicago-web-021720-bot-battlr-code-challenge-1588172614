import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props){
    super()
  }
  renderBotCards = () => {
    return this.props.enslitedBots.map(bot => <BotCard bot={bot} enlistBot={this.props.enlistBot}/>);
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCards()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
