const Navbar = () => {
    return (
        <div className="relative flex flex-col justify-center items-center p-4">
            <ul className="group flex w-10 flex-col gap-4 border-2 border-slate-600 items-center rounded-2xl p-4 cursor-pointer transition-all  
                ease-out duration-100 hover:w-32">
                <li className="list-none w-4 h-4 bg-slate-600 group-hover:w-24 group-hover:duration-100 group-hover:h-6 rounded-full hover:bg-hover transition-all active:bg-accent">
                    <a href="#About" className="opacity-0 group-hover:opacity-100 transition-opacity duration-0 group-hover:duration-100">About</a>
                </li>
                <li className="list-none w-4 h-4 bg-slate-600 group-hover:w-24 group-hover:duration-100 group-hover:h-6 rounded-full hover:bg-hover transition-all active:bg-accent">
                    <a href="#Experience" className="opacity-0 group-hover:opacity-100 transition-opacity duration-0 group-hover:duration-100">Experience</a>
                </li>
                <li className="list-none w-4 h-4 bg-slate-600 group-hover:w-24 group-hover:duration-100 group-hover:h-6 rounded-full hover:bg-hover transition-all active:bg-accent">
                    <a href="#Projects" className="opacity-0 group-hover:opacity-100 transition-opacity duration-0 group-hover:duration-100">Projects</a>
                </li>
            </ul>
        </div>
    );
  };
  
  export default Navbar;
  