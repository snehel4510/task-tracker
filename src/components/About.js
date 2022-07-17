import { Link } from "react-router-dom"
const About = () => {
  return (
    <div>
        <h3>Version 1.0.2</h3>
        {/* <a href="/">Back to Home</a> */}
        <Link to="/">Back to Home</Link>
    </div>
  )
}

export default About