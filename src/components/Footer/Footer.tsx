
import {
    Facebook,
    Twitter,
    MessageCircleHeart,
    Instagram,
    CircleFadingPlus,
    Linkedin,
  } from "lucide-react";
  
  const Footer = () => (
    <div>
      <nav>
        <h2 className="w-full flex justify-center gap-4 bg-slate-600 py-3 px-8 rounded-sm">
          <a target="_blank" href="https://facebook.com" className="border border-black bg-blue-400 rounded-full p-1 w-7 h-7 flex items-center text-black">
            <Facebook />
          </a>
          <a target="_blank" href="https://twitter.com"
          className="border border-black bg-blue-400 rounded-full p-1 w-7 h-7 flex items-center text-black"
          >
            <Twitter />
          </a>
          <a target="_blank" href="https://pinterest.com"
          className="border border-black bg-orange-300 rounded-full p-1 w-7 h-7 flex items-center text-black"
          >
            <MessageCircleHeart />
          </a>
          <a target="_blank" href="https://instagram.com"
          className="border border-black bg-pink-400 rounded-full p-1 w-7 h-7 flex items-center text-black">
            <Instagram />
          </a>
          <a className="border border-black bg-red-400 rounded-full p-1 w-7 h-7 flex items-center text-black">
            <CircleFadingPlus />
          </a>
          <a href="https://linkedin.com"
        className="border border-black bg-blue-300 rounded-full p-1 w-7 h-7 flex items-center hover: text-black">
          <Linkedin />
        </a>
        </h2>
      </nav>
    </div>
  );
  
  export default Footer;