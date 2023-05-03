import {Checker} from "./Checker";
import {Board} from "./Board";

export class Cell{
    x: number;
    y: number;
    color: string;
    checker: Checker | null;
    board: Board;
    available: boolean; // Можно ли двигать шашку
    id: number;

    constructor(board: Board, x: number, y, color, checker: Checker | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.checker = checker;
        this.board = board;
        this.available = false;
        this.id = x*10 + y;
    }

    isEmpty() {
        return this.checker === null;
    }
}