import React from 'react';

export default class Checker extends React.Component {
    render() {
        return (
            <div className={['checker', this.props.color].join(' ')}>
            </div>
        )
    }
}