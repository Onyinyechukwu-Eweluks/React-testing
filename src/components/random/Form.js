import React from "react";
import { useState } from "react";

const Form = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <form>
      <input type="text" name="name" data-testid="name" />
      <input type="email" name="email" data-testid="email" />
      <botton data-testid="btn" onClick={handleClick}>
        {!isClicked ? "Submit" : "Submitting"}
      </botton>
    </form>
  );
};

export default Form;
