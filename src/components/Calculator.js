import './Calculator.css';

function Calculator() {
  return (
    <div className="container">
      <div className="btns">
        <button className="btn" type="button" value="AC">
          AC
        </button>
        <button className="btn" type="button" value="+/-">
          +/-
        </button>
        <button className="btn" type="button" value="%">
          %
        </button>
        <button className="btn operator" type="button" value="÷">
          ÷
        </button>
        <button className="btn" type="button" value="7">
          7
        </button>
        <button className="btn" type="button" value="8">
          8
        </button>
        <button className="btn" type="button" value="9">
          9
        </button>
        <button className="btn operator" type="button" value="x">
          x
        </button>
        <button className="btn" type="button" value="4">
          4
        </button>
        <button className="btn" type="button" value="5">
          5
        </button>
        <button className="btn" type="button" value="6">
          6
        </button>
        <button className="btn operator" type="button" value="-">
          -
        </button>
        <button className="btn" type="button" value="1">
          1
        </button>
        <button className="btn" type="button" value="2">
          2
        </button>
        <button className="btn" type="button" value="3">
          3
        </button>
        <button className="btn operator" type="button" value="+">
          +
        </button>
        <button className="btn span-2" type="button" value="0">
          0
        </button>
        <button className="btn" type="button" value=".">
          .
        </button>
        <button className="btn operator" type="button" value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
