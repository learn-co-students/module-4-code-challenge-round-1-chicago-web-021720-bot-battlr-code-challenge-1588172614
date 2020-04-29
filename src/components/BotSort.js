import React from 'react'

const BotSort = props => {
    return(
        <div className="bot-filter">
            <label>Sort By: </label>
            <select onChange={props.handleChangeSort}>
                <option value="health">Health</option>
                <option value="damage">Damage</option>
                <option value="armor">Armor</option>
            </select>
        </div>
    )
}

export default BotSort