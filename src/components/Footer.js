import React from "react";
import {
  AiFillLinkedin,
  AiFillMail,
  AiOutlineGithub,
  AiOutlineGlobal,
} from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#181a1b] py-2">
      <p className="text-sm text-center text-white">
        Created by a coding enthusiast, flueled by coffee. Find me at:
      </p>
      <div className="flex justify-center gap-2 my-3">
        <a
          href="https://github.com/argianardi"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="mailto:argianardi14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <AiFillMail />
        </a>
        <a
          href="https://argi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <AiOutlineGlobal />
        </a>
        <a
          href="https://www.linkedin.com/in/argianardiprasetya/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <AiFillLinkedin />
        </a>
      </div>

      <div>
        <p className="text-sm text-center text-white">
          &copy; {year} Beta Mart. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
