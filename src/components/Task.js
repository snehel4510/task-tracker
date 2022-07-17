import { FaWindowClose } from 'react-icons/fa';
import { FaBell } from "react-icons/fa";
import { FaBellSlash } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, reminder }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
        <h3>{task.text} 
            <FaWindowClose style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)} />
            { reminder ? (<FaBell onClick={() => onToggle(task.id)}/>) : 
                    (<FaBellSlash onClick={() => onToggle(task.id)}/>)
            }
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task