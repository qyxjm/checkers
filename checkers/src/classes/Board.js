import {Cell} from "./Cell";
import {Checker} from "./Checker";

export class Board{
    cells: Cell[][] = [];
    //lostWhiteCheckers: Checker[] = [];
    //lostBlackCheckers: Checker[] = [];

    initCells() {
        for (let i = 1; i < 9; i++) {
            let row: Cell[] = [];
            for (let j = 1; j < 9; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(this, j, i, "white", null));
                }
                else {
                    row.push(new Cell(this, j, i, "black", null));
                }
            }
            this.cells.push(row);
        }
    }

    getCell(x, y) {
        return this.cells[y][x];
    }

    addCheckers() {
        let checkersNumber = 1;
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 9; j++) {
                if ((i + j) % 2 === 0) {
                    new Checker("black", this.getCell(i, j), checkersNumber);
                    checkersNumber++;
                }
            }
        }
        for (let i = 6; i < 9; i++) {
            for (let j = 1; j < 9; j++) {
                if ((i + j) % 2 === 0) {
                    new Checker("white", this.getCell(i, j), checkersNumber);
                    checkersNumber++;
                }
            }
        }
    }
}