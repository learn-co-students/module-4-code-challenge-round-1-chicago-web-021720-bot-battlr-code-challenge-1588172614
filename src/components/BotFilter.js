import React from 'react'

const BotFilter = props => {
    return (
        <div className="bot-filter">
            <label htmlFor="filter">Filter By Class: </label>
            <select onChange={props.handleChangeClass} name="filter">
                <option value="All">All</option>
                <option value="Assault">Assault</option>
                <option value="Defender">Defender</option>
                <option value="Support">Support</option>
            </select>
        </div>
    )
}

export default BotFilter