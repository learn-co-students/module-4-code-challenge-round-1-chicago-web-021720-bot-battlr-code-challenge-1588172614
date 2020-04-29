import React, { Component } from 'react'


class BotFilter extends Component {
    
    constructor() {
        super()

        this.state = {
            bot_class: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.renderBotClassOptions = this.renderBotClassOptions.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderBotClassOptions() {
        return this.props.botClasses.map(botClass => <option value={botClass}>{botClass}</option>)
    }

    render() {
        return (
            <div className="ui segment">
                <h3>Filter Bots</h3>
                <form onSubmit={event => this.props.handleFilterSubmit(event, this.state)}>
                    <label>
                        Bot Class
                        <select name="bot_class" onChange={this.handleChange} >
                            {this.renderBotClassOptions()}
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default BotFilter
