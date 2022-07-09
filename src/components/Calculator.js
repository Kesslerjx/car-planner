import '../styles/Calculator.css';

function Calculator({ title, inputs, result }) {

    return (
      <div className="calculator">
        <p>{title}</p>
        {inputs.map(input => input)}
        <div className='result-wrapper'>
            <p>{`$${result}`}</p>
        </div>
      </div>
    );
  }
  
  export default Calculator;