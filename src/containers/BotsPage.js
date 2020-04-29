import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super()
  }



  render() {
    return (
      <div>
        <BotCollection bots={this.props.bots} enlistBot={this.props.enlistBot} />
        <YourBotArmy enslitedBots={this.props.enlistedBots} enlistBot={this.props.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;
