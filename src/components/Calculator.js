import '../styles/Calculator.css';

function Calculator({ title, inputs, result, useSign=true, unit=''}) {

    return (
      <div className="calculator">
        <p>{title}</p>
        {inputs.map(input => input)}
        <div className='result-wrapper'>
            <p>{`${useSign ? '$' : ''}${Math.round(result * 100) / 100} ${unit}`}</p>
        </div>
      </div>
    );
  }
  
  export default Calculator;