import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
const NavBar = () => {
  const navigate = useNavigate()
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
    .then(() => {
        navigate('/')
    })
    .catch(error => {
        console.log(error);
    })
  }
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="w-[160px] my-4">
            <img src="https://i.ibb.co/ZNMvLgN/logo.png" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/news"}>News</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            {user ? (
                <button onClick={handleSignOut} className="btn bg-[#F9A51A]">Logout</button>
            ) : (
              <Link to={"/login"}>
                <button className="btn bg-[#F9A51A]">Login</button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
