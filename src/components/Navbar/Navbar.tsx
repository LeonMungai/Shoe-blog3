import {
    LucideHouse,
    Facebook,
    Twitter,
    MessageCircleHeart,
    Instagram,
    CircleFadingPlus,
    Linkedin
  } from "lucide-react";
  import { Link, NavLink } from "react-router-dom";
  import { APP_ROUTES } from "../../constants";
  
  console.log;
  const Navbar = () => (
    <nav className="w-full rounded-sm py-3 bg-teal-400">
      <div className="m-3 flex h-10 justify-center gap-4">
        <a target="_blank" href="https://facebook.com"
        className="border border-black bg-blue-400 rounded-full p-1 w-7 h-7 flex items-center hover:bg-slate-200 text-black">
          <Facebook />
        </a>
        <a target="_blank" href="https://twitter.com"
        className="border border-black bg-gray-400 rounded-full p-1 w-7 h-7 flex items-center hover:bg-slate-300 text-black">
          <Twitter />
        </a>
        <a target="_blank" href="https://pinterest.com"
        className="border border-black bg-orange-300 rounded-full p-1 w-7 h-7 flex items-center hover:bg-slate-200 text-black">
          <MessageCircleHeart />
        </a>
        <a target="_blank" href="https://instagram.com"
        className="border border-black bg-pink-300 rounded-full p-1 w-7 h-7 flex items-center hover:bg-slate-200 text-black">
          <Instagram />
        </a>
        <a className="border border-black bg-red-300 rounded-full p-1 w-7 h-7 flex items-center hover:bg-slate-200 text-black">
          <CircleFadingPlus />
        </a>
        <a href="https://linkedin.com"
        className="border border-black bg-blue-300 rounded-full p-1 w-7 h-7 flex items-center hover: text-black">
          <Linkedin />
        </a>
      </div>
      <div className="flex justify-center border-2 h-16 w-auto border-teal-100 bg-teal-100 rounded-full px-3">
        <Link className="text-black" to={APP_ROUTES.HOME}>
          <div className="m-4 border hover:bg-white border-black rounded-full p-1 w-7 h-7 flex items-center">
            <LucideHouse />
          </div>
        </Link>
        <ul className="flex gap-2">
          <li className="m-4 hover:bg-white rounded-full p-1">
            <NavLink className={({isActive}) =>isActive ? "text-red-500 uppercase": "text-black font-medium uppercase"} to={APP_ROUTES.HOME}>Home</NavLink>
          </li>
          <li className="m-4 hover:bg-white rounded-full p-1">
            <NavLink className={({isActive}) =>isActive ? "text-red-500 uppercase": "text-black font-medium uppercase"  } to={APP_ROUTES.CONTACT}>Contact</NavLink>
          </li>
          <li className="m-4 hover:bg-white rounded-full p-1">
            <NavLink className={({isActive}) =>isActive ? "text-red-500 uppercase": "text-black font-medium uppercase"  } to={APP_ROUTES.ABOUT}>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
  
  export default Navbar;