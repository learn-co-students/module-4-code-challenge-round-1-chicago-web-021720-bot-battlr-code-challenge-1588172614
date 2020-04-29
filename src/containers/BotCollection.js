import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  renderBotCollection = (bots, enlistCallback) => {
	  return bots.map(bot => {
		  return <BotCard bot={bot} key={bot.id} callback={enlistCallback} />
	  })
  }

  render(){
	  const {botCollection, enlistCallback} = this.props
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBotCollection(botCollection, enlistCallback)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
