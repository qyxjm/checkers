import React, {FC} from 'react';
import {Cell} from "../classes/Cell";
//import CheckerComponent from "./CheckerComponent";

interface CellProps {
    cell: Cell;
}

const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {

            }
        </div>
    )
}

export default CellComponent;