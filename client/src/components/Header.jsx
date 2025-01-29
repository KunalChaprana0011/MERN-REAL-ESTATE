import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header  className="bg-gray-300 shadow-md p-2 px-3   montserrat-fonttt gradient">
      <div className="flex items-center justify-between cursor-pointer ">
        <Link to = '/'>
        <h1 className="flex flex-wrap font-bold text-lg md:text-2xl  ">
          <span className="text-slate-500 ">Mern</span>
          <span className="text-slate-600">Estate</span>
        </h1>
        </Link>

        <form className="p-1.5 sm:p-2 outline-none  bg-slate-50 rounded-lg flex items-center px-1">
          <input className="outline-none p-1 w-18 sm:w-64 bg-transparent" type="text" placeholder="Search here for more..." id="" />
          <FaSearch  className='text-slate-500 cursor-pointer'/>
        </form>
        <ul className='flex gap-6 text-slate-600 font-medium '>
          <Link to ='/home'>
          
          <li className='cursor-pointer hover:text-slate-900 hidden  sm:inline'>Home</li>
          </Link>
          <Link to ='/about'>
          <li className='cursor-pointer hover:text-slate-900  hidden sm:inline'>About</li>
          </Link>
          <Link to ='/sign-in'>
          <li className='cursor-pointer hover:text-slate-900'>SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
