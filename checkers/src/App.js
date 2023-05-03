import React, {useEffect, useState} from 'react';
//import {Player} from "./classes/Player";
import './style.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./classes/Board";

const App = () => {
    const [board, setBoard] = useState(new Board())

    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells()
        setBoard(newBoard)
    }

    return (
        <div className="app">
            <BoardComponent
                board={board}
                setBoard={setBoard}
            />
        </div>
    );
}

export default App;
