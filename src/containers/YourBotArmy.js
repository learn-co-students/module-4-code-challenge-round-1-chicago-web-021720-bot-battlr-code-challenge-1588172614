import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard bot={bot} updateIsArmy={this.props.updateIsArmy}/>
    })
  }

  render(){
    console.log(this.props)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
