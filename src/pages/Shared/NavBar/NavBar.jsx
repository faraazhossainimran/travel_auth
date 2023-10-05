import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={'/'} className="w-[200px] my-4">
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
            <Link to={'/login'}> <button className="btn bg-[#F9A51A]">Login</button></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
