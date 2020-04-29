import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  	renderCards = () => {
		return this.props.allBots.map(bot => {
			if (!bot.inArmy) {
				return <BotCard bot={bot} onCardClick={this.props.onNotArmyCardClick}/>
			}
		}) 
  	}

	render(){
		return (
		<div className="ui four column grid">
				<div className="row">
				{this.renderCards()}
				Collection of all bots
				</div>
		</div>
		);
	}

};

export default BotCollection;
