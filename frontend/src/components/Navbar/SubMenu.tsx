import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../context/navbar.context';

interface Menu {
  title: string;
  subMenuItems: { title: string; url: string }[];
}

const SubMenu: React.FC<{
  menu: Menu;
}> = ({ menu }) => {
  const { setSidebarOpen } = useContext(SidebarContext);

  return (
    <div className='relative'>
      <p
        className='md:text-2xl text-white capitalize font-medium focus:outline-none
                    data-[active]:text-black'
      >
        {menu.title}
      </p>
      <ul className='ml-5 list-disc'>
        {menu.subMenuItems.map((item, index) => (
          <li key={index} className='mt-1 mb-1'>
            <Link
              id={item.title}
              key={index}
              className='p-1 md:text-lg font-extralight'
              to={item.url}
              onClick={() => setSidebarOpen((state) => !state)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
