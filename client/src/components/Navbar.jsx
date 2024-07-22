import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="signin">SignIn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
