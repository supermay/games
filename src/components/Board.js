import React, { Component } from 'react';
import Square from './Square';
const BLACK = "\u2B24";
const WHITE = "\u25EF";
const EMPTY = '';
class Board extends Component {
  constructor(){
    super();
    this.state = {
      squares: Array(15).fill(Array(15).fill(EMPTY)),
      color: BLACK,
      winner: EMPTY
    }
  }
  deepCopy(newSquares){
    return JSON.parse(JSON.stringify(newSquares));
  }
  nextColor(color){
    if(color === BLACK) return WHITE;
    return BLACK;
  }
  checkRows(squares, color){
    for(let row = 0; row < squares.length; row++){
      let line = squares[row];
      let count = 0;
      for(let col = 0; col < line.length; col++){
        if(line[col] === color){
          count++;
          if(count === 5) return true;
        } else{
          count = 0;
        }
      }
    }
    return false;
  }
  checkColumns(squares, color){
    for(let col = 0; col < squares.length; col++){
      let count = 0;
      for(let row = 0; row < squares.length; row++){
        if(squares[row][col] === color){
          count++;
          if(count === 5) return true;
        } else{
          count = 0;
        }
      }
    }
    return false;
  }
  checkLRDiagonals(squares, color){
    for(let row = 0; row < squares.length; row++){
      let count = 0;
      for(let col = 0; col < squares.length - row; col++){
        if(squares[col + row][col] === color){
          count++;
          if(count === 5) return true;
        } else{
          count = 0;
        }
      }
    }
    for(let col = 1; col < squares.length; col++){
      let count = 0;
      for(let row = 0; row < squares.length - col; row++){
        if(squares[row][col + row] === color){
          count++;
          if(count === 5) return true;
        } else{
          count = 0;
        }
      }
    }
    return false;
  }
  checkRLDiagonals(squares, color){
    squares = this.deepCopy(squares);
    for(let row = 0; row < squares.length; row++){
      squares[row].reverse();
    }
    return this.checkLRDiagonals(squares, color);
  }
  won(squares, color){
    return this.checkRows(squares, color) || this.checkColumns(squares, color) || this.checkLRDiagonals(squares, color) || this.checkRLDiagonals(squares, color);
  }
  handleClick(rowNumber, columnNumber){
    if(this.state.winner !== EMPTY) return;
    if(this.state.squares[rowNumber][columnNumber] !== EMPTY) return;
    var newSquares = this.state.squares;
    newSquares = this.deepCopy(newSquares);
    newSquares[rowNumber][columnNumber] = this.state.color;
    var winner = this.state.winner;
    if(this.won(newSquares, this.state.color)){
      winner = this.state.color;
    }
    this.setState(
      {
        squares: newSquares,
        color: this.nextColor(this.state.color),
        winner: winner
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
  getStatus(){
    if(this.state.winner !== EMPTY) return `Winner is ${this.state.winner}`;
    return `Next player: ${this.state.color}`;
  }
  render(){
    var rows = [];
    for(var i = 0; i < this.state.squares.length; i++){
      var row = this.state.squares[i];
      rows.push(this.renderRow(i, row))
    }
    return (
      <div>
        <div className="status">{this.getStatus()}</div>
        {rows}
      </div>
    );
  }
}
export default Board
