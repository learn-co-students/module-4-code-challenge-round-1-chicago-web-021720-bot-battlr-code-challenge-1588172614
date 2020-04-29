import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
  renderBotCollection = (bots, enlistCallback, specCallback) => {
	  return bots.map(bot => {
		  return <BotCard bot={bot} key={bot.id} callback={enlistCallback} enlisted={false} specCallback={specCallback}/>
	  })
  }

  renderBotSpecs = (bot) => {
	  return <BotSpecs bot={bot} />
  }

  render(){
	  const {botCollection, enlistCallback, specCallback, spec} = this.props
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {
				  spec ?
				  this.renderBotSpecs(spec)
				  :
				  this.renderBotCollection(botCollection, enlistCallback, specCallback)
				}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
