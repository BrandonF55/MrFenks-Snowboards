import React from 'react';
import PropTypes from "prop-types";

function Board(props) {
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
  terrain: PropTypes.string,
  board: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenBoardClicked: PropTypes.func

};

export default Board;