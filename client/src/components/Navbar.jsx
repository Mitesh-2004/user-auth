import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/signUp"> <p>SignUp</p></Link>
            <Link to="/signIn"> <p>SignIn</p></Link>
           
        </nav>
    </div>
  )
}

export default Navbar