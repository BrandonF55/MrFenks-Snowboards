import React from 'react'; 
import PropTypes from 'prop-type';


function Details(props){

  const {board, onClickingDelete, onClickingSell } = props
  return(
    <React.Fragment>
      <h1>Here Are The Board Details</h1>
      <h3>{board.terrain} | {board.price}</h3>
      <p><em>Quantity: {board.quantity}</em></p>
      <button onClick={() => props.onClickingEdit }>Update Board</button>
      <button onClick={() => onClickingDelete(board.id) }>Delete Board</button>
      <button onClick={() => onClickingSell(board.id) }>sell</button>
    </React.Fragment>
  )
}

Details.PropTypes = {
  board: PropTypes.Object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default Details; 