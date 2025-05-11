import React, { useContext } from 'react';

import { SidebarContext } from '../../context/navbar.context';
import NavLink from './NavLink';

// import SubMenu from './SubMenu';

const Sidebar: React.FC = () => {
  const { sidebarOpen } = useContext(SidebarContext);
  return (
    <>
      <aside
        className={`h-full fixed z-10 top-18 w-[100%] md:w-[20%] border-r bg-black/95 
                    duration-500 ease-in-out ${
                      sidebarOpen ? 'left-0' : '-left-100'
                    }`}
      >
        <NavLink linkName='Home' url='/' />
        <NavLink linkName='Usuários' url='/user' />
        <NavLink linkName='Administre seus times favoritos' url='/teams' />
      </aside>
    </>
  );
};

export default Sidebar;
