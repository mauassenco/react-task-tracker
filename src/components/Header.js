import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button  text="Add Task" onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Default title'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in JS
// const headerSubtitle = {
//   backgroundColor: 'coral',
//   color: 'lightblue'
// }

export default Header
