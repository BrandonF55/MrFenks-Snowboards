import React from 'react';
import PropTypes from "prop-types";

function Board(Props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenBoardClicked(props.id)}>
        <h3>{props.terrain} | ${props.price}</h3>
        <hr />
        <hr />
      
      </div>

    </React.Fragment>
  )
  
}

Board.propTypes = {
  terrain: PropType.string,
  board: PropType.string,
  price: PropType.number,
  quantity: propType.number,
  id: PropType.string,
  whenBoardClicked: PropType.func

};

export default Board;