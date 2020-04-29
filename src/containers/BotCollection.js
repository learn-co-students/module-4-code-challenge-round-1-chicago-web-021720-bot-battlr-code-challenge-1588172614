import React from "react";
import BotCard from "../components/BotCard";
import BotFilter from '../components/BotFilter'
import BotSort from '../components/BotSort'

class BotCollection extends React.Component {
  renderBots = () => {
	  return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleClickBot={this.props.handleClickBot}/>)
  }

  render(){
  	return (
		<React.Fragment>
			<BotFilter handleChangeClass={this.props.handleChangeClass}/>
			<BotSort handleChangeSort={this.props.handleChangeSort}/>
			<div className="ui four column grid">
				<div className="row">
				{this.renderBots()}
				</div>
			</div>
		</React.Fragment>
  	);
  }

};

export default BotCollection;
