import React from "react";

function Form(props) {
  return (
    <form>
      <input 
      type="text" 
      onClick={props.handleFirstNameChange} 
      value={props.firstName} 
      />
      <input 
      type="text"
       onClick={props.handleLastNameChange} 
       value={props.lastName} 
       />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
