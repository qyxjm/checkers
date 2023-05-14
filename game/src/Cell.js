import React from 'react';
import Checker from './Checker';
import './style.css';

export default class Cell extends React.Component {
    render() {


        return (
            <div className={['cell', this.props.color].join(' ')}>
                {
                    (this.isEmpty() === false) ? (this.renderChecker()) : <div/>
                }
            </div>
        )
    }

    isEmpty() {
        return (
            this.props.checker === null
        )
    }

    addChecker(color, id) {
        this.checker = {color, id}
    }

    deleteChecker() {
        this.checker = null;
    }

    renderChecker() {
        return (
            <Checker
                color={this.checker.color}
                id={this.checker.id}
            />
        )
    }
}