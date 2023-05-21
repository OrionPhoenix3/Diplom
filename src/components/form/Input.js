const Input = ({name, type, placeholder, value, onChange, onBlur, touched, errors}) => {
    return(
        <>
            <label htmlFor={name} className="input__label">
                {name.charAt(0).toUpperCase() + name.slice(1)}
                <input type={type}
                       className="input__input"
                       name={name}
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange}
                       onBlur={onBlur}
                />
                {touched && errors ? (<span className="input__err">{errors}</span>) : null}
            </label>
        </>
    )
}
export default Input