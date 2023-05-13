import React from 'react';
import './style.css';

export default class Cell extends React.Component {
    render() {


        return (
            <div className={['cell', this.props.color].join(' ')}>
            </div>
        )
    }
}