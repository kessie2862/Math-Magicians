import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

function Button({ onButtonClick }) {
  const handleClick = (e) => {
    const buttonName = e.target.value;
    onButtonClick(buttonName);
  };

  return (
    <div className="container">
      <div className="btns">
        <button className="btn" type="button" value="AC" onClick={handleClick}>
          AC
        </button>
        <button className="btn" type="button" value="+/-" onClick={handleClick}>
          +/-
        </button>
        <button className="btn" type="button" value="%" onClick={handleClick}>
          %
        </button>
        <button
          className="btn operator"
          type="button"
          value="÷"
          onClick={handleClick}
        >
          ÷
        </button>
        <button className="btn" type="button" value="7" onClick={handleClick}>
          7
        </button>
        <button className="btn" type="button" value="8" onClick={handleClick}>
          8
        </button>
        <button className="btn" type="button" value="9" onClick={handleClick}>
          9
        </button>
        <button
          className="btn operator"
          type="button"
          value="x"
          onClick={handleClick}
        >
          x
        </button>
        <button className="btn" type="button" value="4" onClick={handleClick}>
          4
        </button>
        <button className="btn" type="button" value="5" onClick={handleClick}>
          5
        </button>
        <button className="btn" type="button" value="6" onClick={handleClick}>
          6
        </button>
        <button
          className="btn operator"
          type="button"
          value="-"
          onClick={handleClick}
        >
          -
        </button>
        <button className="btn" type="button" value="1" onClick={handleClick}>
          1
        </button>
        <button className="btn" type="button" value="2" onClick={handleClick}>
          2
        </button>
        <button className="btn" type="button" value="3" onClick={handleClick}>
          3
        </button>
        <button
          className="btn operator"
          type="button"
          value="+"
          onClick={handleClick}
        >
          +
        </button>
        <button
          className="btn operator span-2"
          type="button"
          value="0"
          onClick={handleClick}
        >
          0
        </button>
        <button className="btn" type="button" value="." onClick={handleClick}>
          .
        </button>
        <button
          className="btn operator"
          type="button"
          value="="
          onClick={handleClick}
        >
          =
        </button>
      </div>
    </div>
  );
}

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
