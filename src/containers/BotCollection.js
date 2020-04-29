import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  constructor(props){
    super()
  }
  renderBotCards = () => {
    return this.props.bots.map(bot => <BotCard bot={bot} enlistBot={this.props.enlistBot}/>);
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        {this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
