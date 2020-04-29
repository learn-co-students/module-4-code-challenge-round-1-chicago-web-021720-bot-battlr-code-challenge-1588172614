import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class BotCollection extends React.Component {

  renderBots = () => {
	  return this.props.bots.map(bot => {
		if (!bot.isFlipped){
			return <BotCard key={bot.id} bot={bot} updateIsArmy={this.props.updateIsArmy} updateIsFlipped={this.props.updateIsFlipped}/>
		} else {
			return <BotSpecs key={'specs' + bot.id} bot={bot} updateIsArmy={this.props.updateIsArmy} updateIsFlipped={this.props.updateIsFlipped}/>
		}

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
