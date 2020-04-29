import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
	
	constructor() {
		super()
		this.renderBot = this.renderBot.bind(this)
		this.renderBots = this.renderBots.bind(this)
	}	

	renderBot(bot) {
		return <BotCard bot={bot} handleClick={this.props.handleIndexBotClick}/>
	}

	renderBots() {
		return this.props.bots.map(this.renderBot)
	}

	render(){
		return (
			<div className="ui four column grid">
				<div className="row">
					{this.renderBots()}
				</div>
			</div>
		);
	}

};

export default BotCollection;
