import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SidebarContext } from '../../context/navbar.context';

const NavLink: React.FC<{ linkName: string; url: string }> = ({
  linkName,
  url,
}) => {
  const { setSidebarOpen } = useContext(SidebarContext);

  function handleMenuClick() {
    setSidebarOpen((state) => !state);
  }
  return (
    <span className='flex flex-col gap-4 m-6 text-white'>
      <Link
        className='md:text-lg focus:outline-none
                  data-[active]:text-black
                  data-[focus]:text-black 
                  data-[hover]:text-black'
        to={url}
        onClick={handleMenuClick}
      >
        {linkName}
      </Link>
    </span>
  );
};

export default NavLink;
