import { useContext } from 'react';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router';

import { SidebarContext } from '../../context/navbar.context';

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

  function handleMenuButtonClick() {
    setSidebarOpen((state) => !state);
  }

  return (
    <nav
      className='
        fixed top-0 z-3 w-full bg-white text-black 
        flex justify-between md:px-25 items-center 
        mx-auto h-18 shadow-md
        outline outline-black/5
        dark:-outline-offset-1
        dark:outline-white/10
      '
    >
      <Link
        className='ml-8 max-w-[60px]'
        to='/'
        onClick={handleMenuButtonClick}
      >
        <p>Logo</p>
      </Link>

      <button className='mr-8 cursor-pointer' onClick={handleMenuButtonClick}>
        {sidebarOpen ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </button>
    </nav>
  );
};
export default Navbar;
