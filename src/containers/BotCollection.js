import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class BotCollection extends React.Component {

  renderBots = () => {
	let bots = this.props.bots
	if (this.props.isSortedByType){
		bots = this.props.sortByType
	}


	return bots.map(bot => {
	if (!bot.isFlipped){
		return (
			<BotCard key={bot.id} bot={bot} 
			updateIsArmy={this.props.updateIsArmy} 
			updateIsFlipped={this.props.updateIsFlipped}
			/>
		)
	} else {
		return (
			<BotSpecs key={'specs' + bot.id} bot={bot} 
			updateIsArmy={this.props.updateIsArmy} 
			updateIsFlipped={this.props.updateIsFlipped}
			/>
		)
	}

	})
  }

  render(){
  	return (
  	  <div className="ui four column grid">
			<button onClick={this.props.toggleSortBotsByType}>Sort Bots By Type</button>
    		<div className="row">
    		  Collection of all bots
			  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }
};

export default BotCollection;
