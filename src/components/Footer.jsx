import React from 'react';

const Footer = () => {
    const FaGithub=()=>{

    }
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer items-end justify-center bg-transparent w-full flex flex-grow  py-4">
      <div className="flex w-fit items-center justify-center gap-4">
        <p className=" text-slate-50 text-xs
        ">
          Copyright © {currentYear} assinscreedFC
        </p>
        <a
          href="https://github.com/assinscreedFC"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          <img src="./github.svg" alt="github"  className=' w-5 text-3xl transition-transform duration-300 transform hover:rotate-360 hover:scale-125 hover:animate-rotate-scale-up'/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
