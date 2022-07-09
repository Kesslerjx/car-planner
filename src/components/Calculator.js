import '../styles/Calculator.css';

function Calculator({ title, inputs, result }) {

    return (
      <div className="calculator">
        <p>{title}</p>
        {inputs.map(input => input)}
        <div className='result-wrapper'>
            <p>{`$${Math.round(result * 100) / 100}`}</p>
        </div>
      </div>
    );
  }
  
  export default Calculator;