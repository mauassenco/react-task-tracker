import PropTypes from 'prop-types'
import Button from './Button'
import Task from './Task'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        text={showAdd ? 'Close' : 'Add Task'}
        onClick={onAdd}
        color={showAdd ? 'red' : 'steelblue'}
      />
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

