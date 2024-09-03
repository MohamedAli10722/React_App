import React from "react";

const FunctionComponent = (props) => {
    const { name, gender, nationality, state, age, skills = ['html'], children } = props;
    return (
      <div>
        <h2>{name}</h2>
        <h2>{gender}</h2>
        <h2>{age}</h2>
        <h2>{nationality}</h2>
        <h2>{state}</h2>
        <h2>{skills}</h2>
        <h2>{children}</h2>
      </div>
    );
  };
  
  export default FunctionComponent;