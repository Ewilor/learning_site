const Button = (props) => {
  const {
    onClick,
    className = "",
    type = "submit",
    id,
    label,
  } = props

  return (
    <button
      id={id}
      onClick={onClick}
      className={`${className} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`}
      type={type}
    >
      {label}
    </button>
  )
}

export default Button