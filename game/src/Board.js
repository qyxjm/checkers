import React from 'react';
import Cell from './Cell'
import './style.css';

export default class Board extends React.Component {
    render() {
        let board = [];
        let x, y, color;
        for (let i = 1; i < 9; i++) {
            let row = [];
            y = i;
            for (let j = 1; j < 9; j++) {
                x = j;
                if ((i + j) % 2 === 0) {
                    color = 'white';
                }
                else {
                    color = 'black';
                }
                row.push({x, y, color});
            }
            board.push(row);
        }

        return (
            <div className='board'>
                {
                    board.map((row, x) =>
                        row.map((cell, y) => (
                            <Cell
                                x={cell.x}
                                y={cell.y}
                                color={cell.color}
                                checker={null}
                            />
                        ))
                    )
                }
            </div>
        )
    }
}