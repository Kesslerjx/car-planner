import '../styles/Input.css'

function Input({label, value, name, onChange, disabled=false}) {
    return (
        <div className="input-wrapper">
        <p>{label}</p>
        <input 
            value={value}
            onChange={(e) => onChange(e)}
            name={name}
            type='number'
            disabled={disabled}
        ></input>
    </div>
    )
}

export default Input