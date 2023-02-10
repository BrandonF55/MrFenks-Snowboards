import React from 'react';
import PropType from 'prop-types';
import { v4 } from "uuid";
import BoardForm from './BoardForm';

function NewBoard(props){

  function HandleNewBoardSubmission(event){
    event.preventDefault();
    props.onSnowBoardCreation({
    terrain: event.target.terrain.value,
    price: event.target.price.value,
    quantity: event.target.quantity.value,
    id: v4()
    })
  }

    return(
      <React.Fragment>
        <BoardForm 
        formSubmissionHandler={HandleNewBoardSubmission}
        buttonText="Add New Board"/>
      </React.Fragment>
    )
}

    NewBoard.PropType = {
      onNewBoard: PropType.func

    };


    export default NewBoard;

