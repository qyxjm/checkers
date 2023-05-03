import {Cell} from "./Cell"

export class Checker {
    color: string;
    cell: Cell;
    id: number;
    checkersType: string;

    constructor(color, cell: Cell, number) {
        this.color = color;
        this.cell = cell;
        this.id = number;
        this.cell.checker = this;
        this.checkersType = 'simple';
    }
}