import React, { Component } from 'react';
import Square from './Square';
// import './App.css';

const BLACK = "\u2B24";
const WHITE = "\u25EF";

class Board extends Component {

  constructor(){
    super();
    this.state = {
      squares: Array(15).fill(Array(15).fill('')),
      color: BLACK
    }
  }

  nextColor(color){
    if(color === BLACK) return WHITE;
    return BLACK;
  }

  handleClick(rowNumber, columnNumber){
    if(this.state.squares[rowNumber][columnNumber] !== ''){
      return;
    }

    var newSquares = this.state.squares;
    newSquares = JSON.parse(JSON.stringify(newSquares)); // deep copy
    newSquares[rowNumber][columnNumber] = this.state.color;

    this.setState(
      {
        squares: newSquares,
        color: this.nextColor(this.state.color)
      }
    )
  }

  renderSquare(rowNumber, columnNumber, content){
    return <Square value={content} onClick={() => (this.handleClick(rowNumber, columnNumber))} />
  }

  renderRow(rowNumber, row) {
    var cells =[];
    for(var j = 0; j < row.length; j++){
      cells.push(this.renderSquare(rowNumber, j, row[j]));
    }
    return (
      <div className="board-row">
        {cells}
      </div>
    );
  }

  render(){
    const status = `Next player: ${this.state.color}`;
    var rows = [];

    for(var i = 0; i < this.state.squares.length; i++){
      var row = this.state.squares[i];
      rows.push(this.renderRow(i, row))
    }

    return (
      <div>
        <div className="status">{status}</div>
        {rows}
      </div>
    );
  }
}

export default Board
