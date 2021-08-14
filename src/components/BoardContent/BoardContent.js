import React, { useState, useEffect } from 'react'
import './BoardContent.scss'
import { isEmpty } from 'lodash'

import Column from 'components/Column/Column'
import { initialData } from 'actions/InitialData'
import { mapOrder } from 'utilities/sort'

const BoardContent = () => {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
        if (boardFromDB) {
            setBoard(boardFromDB)

            setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
        }
    }, [])

    if (isEmpty(board)) {
        return <div className="not-found" style={{ textAlign: "center", color: "white", display: "flex", justifyContent: "center", alignItems: "center," }}>
            <h1>
                Board not found!
            </h1>
        </div>
    }

    return (
        <nav className="board-content">
            {columns.map((column, index) => {
                return <Column key={index} column={column} />
            })}
        </nav>
    )
}

export default BoardContent

