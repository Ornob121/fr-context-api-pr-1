import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  return (
    <nav>
      <div className="navbar bg-base-300 flex justify-between">
        <div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/order">
            Order
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          <Link
            className="btn btn-ghost normal-case text-xl"
            to="/registration"
          >
            Registration
          </Link>
        </div>
        <div>
          {user ? (
            <div>
              {user.email}
              <button onClick={handleLogOut} className="btn btn-xs">
                Logout
              </button>
            </div>
          ) : (
            <Link className="btn btn-ghost normal-case text-xl" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
