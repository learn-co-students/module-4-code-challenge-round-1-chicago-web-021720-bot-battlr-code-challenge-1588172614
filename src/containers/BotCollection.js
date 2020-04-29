import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBots = () => {
	  return this.props.bots.map(bot => {
		  return <BotCard bot={bot} updateIsArmy={this.props.updateIsArmy}/>
	  })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
