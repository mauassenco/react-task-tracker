import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onCLick = ()=> {
    console.log('Clicked as props');
  }
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color= "red" text="Add Task" onClick={onCLick}/>
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
