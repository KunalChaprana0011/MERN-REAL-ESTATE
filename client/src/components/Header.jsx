import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-gray-300 shadow-md p-2 px-3   montserrat-fonttt gradient">
      <div className="flex items-center justify-between cursor-pointer ">
        <Link to="/">
          <h1 className="flex flex-wrap font-bold text-lg md:text-2xl  ">
            <span className="text-slate-500 ">Mern</span>
            <span className="text-slate-600">Estate</span>
          </h1>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="p-1.5 sm:p-2 outline-none  bg-slate-50 rounded-lg flex items-center px-1"
        >
          <input
            className="outline-none p-1 w-18 sm:w-64 bg-transparent"
            type="text"
            placeholder="Search here for more..."
            id=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-500 cursor-pointer" />
          </button>
        </form>
        <ul className="flex gap-6 text-slate-600 font-medium ">
          <Link to="/home">
            <li className="cursor-pointer hover:text-slate-900 hidden  sm:inline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer hover:text-slate-900  hidden sm:inline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="w-7 h-7 rounded-full object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="cursor-pointer hover:text-slate-900">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
