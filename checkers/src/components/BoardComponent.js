import React from 'react';
import {Board} from "../classes/Board";
import {FC} from "react";
import CellComponent from "./CellComponent";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board}) => {
    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                        cell={cell}
                        key={cell.id}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent;