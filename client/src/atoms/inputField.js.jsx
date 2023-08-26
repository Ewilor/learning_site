const InputField = (props) => {
  const {
    value,
    onChange,
    type = "text",
    placeholder = "placeholder",
    id,
    name,
    label,
    wrapperClassName = "",
    labelClassName = "",
    inputClassName = ""
  } = props

  return (
    <div className={`flex items-center justify-between ${wrapperClassName}`}>
        {label ? <label htmlFor={name} className={labelClassName}>{label}</label> : null}
        <input
          className={`${inputClassName} border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
        />
    </div>
  )
}

export default InputField
