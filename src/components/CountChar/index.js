import './index.css'

const CountChar = props => {
  const {details} = props
  const {text, length} = details
  return (
    <li>
      <p>
        {text}:{length}
      </p>
    </li>
  )
}
export default CountChar
