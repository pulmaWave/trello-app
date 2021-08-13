import React from 'react'
import './BoardContent.scss'

import Column from 'components/Column/Column'

const BoardContent = () => {
    return (
        <nav className="board-content">
            <Column />
            <Column />
            <Column />
        </nav>
    )
}

export default BoardContent

