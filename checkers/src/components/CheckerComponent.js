import React, {FC} from 'react';
import {Checker} from "../classes/Checker";

interface CheckerProps {
    checker: Checker;
}

const CheckerComponent: FC<CheckerProps> = ({checker}) => {
    return (
        <div className={['checker', checker.color].join(' ')}>
        </div>
    )
}

export default CheckerComponent;