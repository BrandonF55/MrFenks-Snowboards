
import React from "react";
import PropTypes from "prop-types";

function BoardForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input
                    type='text'
                    name='terrain'
                    placeholder='Board Terrain' /><br/>
                <input
                    type='number'
                    name='price'
                    placeholder='Price' /><br/>
                <input
                    type='number'
                    name='quantity'
                    placeholder='# of stock' /><br/><br/>
                    <button class="btn btn-danger" type='submit'>{props.buttonText}</button>
                    
            </form>
        </React.Fragment>
    );
}

BoardForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default BoardForm;