import React from 'react';
import { LuCoins } from 'react-icons/lu';
import { AiOutlineMenu } from 'react-icons/ai';

const Nav3 = () => {
  const onMenuToggle = (e: any) => {
    const navlinks = document.querySelector('.navLinks');
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navlinks?.classList.toggle('left-[0%]');
  };

  return (
    <>
      <header className="relative shadow-lg px-3 py-2">
        <nav className="flex justify-between">
          <div className="w-[130px] md:w-[200px] flex items-center">
            <LuCoins /> COINCASH
          </div>
          <div className="flex items-center gap-3">
            <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                {/* ... your list items ... */}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold text-white px-5 py-2 rounded-full"
              >
                Login
              </button>
              <AiOutlineMenu size={20} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav3;
