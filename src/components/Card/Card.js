import React from 'react'
import './Card.scss'

const Task = (props) => {
    const { card } = props

    return (
        <li className="card-item">
            {card.cover && <img
                src={card.cover} className="card-cover"
                alt="men in black"
            />}
            {card.title}
        </li>
    )
}

export default Task