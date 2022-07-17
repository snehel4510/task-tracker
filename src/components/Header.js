import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, show, onAdd }) => {

    // let onClick = () => {
    //     console.log('clicked')
    // }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={show ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task-Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// styled components -> CSS in JS
// const headingStyle  = {
//     color: '#fff',
//     backgroundColor: '#333',
// }

export default Header