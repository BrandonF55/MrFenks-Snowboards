import React from 'react';
import PropTypes from 'Prop-type'
import Board from "./Board"; 

function BoardList(props) {
  return(
    <React.Fragment>
      {props.boardList.map((board) =>
      <Board 
      whenBoardClicked={props.onBoardSelection}
      terrain ={board.terrain}
      price = {board.price}
      id = {board.id}
      key = {board.id}/>
      )}
    </React.Fragment>
  );
}

BoardList.propTypes = {
  boardList: PropTypes.Array,
  onBoardSelection: PropTypes.func
};

export default BoardList;