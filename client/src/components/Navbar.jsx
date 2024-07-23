import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="container mx-auto p-4">
        <ul className="flex justify-end space-x-14 ">
          <li>
            <Link
              to="/signup"
              className=" hover:bg-orange-500 hover:text-white p-2 px-4 transition duration-200 rounded-lg"
            >
              SignUp
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className=" hover:bg-orange-500 hover:text-white p-2 px-4 transition duration-200 rounded-lg"
            >
              SignIn
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
