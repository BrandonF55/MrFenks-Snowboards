import React from 'react';
import PropTypes from 'prop-types';

function BoardForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input 
      type="text"
      name="terrain"
      placeholder="Board Terrain" />
      <input 
      type="text"
      name="price" 
      placeholder="price"/>
      <input 
      type="number"
      name="quantity" 
      placeholder="# of stock"/>
      <button type="submit">{prop.buttonText}</button>
    </form>
    </React.Fragment>
    
  );
}

    BoardForm.propTypes = {
      formSubmissionHandler: PropType.func,
      buttonText: PropType.string
    };

    export default BoardForm;