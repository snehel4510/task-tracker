import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, show, onAdd }) => {

    const location = useLocation();

    return (
        <header className='header'>
            <h1>{title}</h1>
            { location.pathname==='/' && <Button text={show ? 'Close' : 'Add'} onClick={onAdd} />}
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