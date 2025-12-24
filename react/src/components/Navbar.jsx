import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className="p-2 h-20 bg-amber-500 flex justify-between items-center">
      <h1 className="text-4xl font-bold">LOGO</h1>
      <ul className="flex gap-4 font-bold">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/service">
          <li>Service</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      {currentUser ? (
        <h1>{currentUser?.name}</h1>
      ) : (
        <div className="flex gap-4">
          <Link to="/signin">
            <button className="p-2 px-4 rounded-md bg-red-600">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="p-2 px-4 rounded-md bg-blue-600">Sign up</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
