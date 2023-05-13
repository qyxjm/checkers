import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Board from './Board';

const game = ReactDOM.createRoot(document.getElementById('root'));
game.render(
  <div className='game'>
    <Board />
  </div>
);