import '../styles/Input.css'

function Input({label, value, name, onChange}) {
    return (
        <div className="input-wrapper">
        <p>{label}</p>
        <input 
            value={value}
            onChange={(e) => onChange(e)}
            name={name}
            type='number'
        ></input>
    </div>
    )
}

export default Input