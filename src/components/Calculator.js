import '../styles/Calculator.css';

function Calculator({ title, description, inputs, result, useSign=true, unit=''}) {

    /*return (
      <div className="calculator">
        <p>{title}</p>
        {inputs.map(input => input)}
        <div className='result-wrapper'>
            <p>{`${useSign ? '$' : ''}${Math.round(result * 100) / 100} ${unit}`}</p>
        </div>
      </div>
    );*/

    return (
      <div className="calculator">
        <div>
          <div>
            <p className='calculator-title'>{title}</p>
            <p className='calculator-description'>{description}</p>
          </div>
          <div>{inputs.map(input => input)}</div>
        </div>
        <div className='result-wrapper'>
            <p>{`${useSign ? '$' : ''}${Math.round(result * 100) / 100} ${unit}`}</p>
        </div>
      </div>
    )


  }
  
  export default Calculator;