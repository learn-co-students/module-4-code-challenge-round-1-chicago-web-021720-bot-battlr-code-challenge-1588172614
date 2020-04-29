import React, { Component } from 'react';

class BotSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: ''
        }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.handleChange(event.target.value)
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.handleClear(this.state.query)
        this.setState({
            query: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input name="query" placeholder="Search" value={this.state.query} type="text" onChange={event => this.handleChange(event)}></input>
                    <button onClick={event => this.handleSearch(event)} type="button">Clear</button>
                </form>
            </div>
        );
    }
}

export default BotSearch;