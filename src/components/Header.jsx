const Header = () => {
  return (
    <header className="bg-gray-300 shadow-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="flex flex-wrap font-bold text-3xl md:text-4xl ">
          <span className="text-slate-500 ">Mern</span>
          <span className="text-slate-600">Estate</span>
        </h1>

        <form className="p-3 outline-none w-[20vw]">
          <input className="outline-none p-3 w-full" type="text" placeholder="Search.." id="" />
        </form>
      </div>
    </header>
  );
};

export default Header;
