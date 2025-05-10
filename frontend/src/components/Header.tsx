import Navbar from './Navbar/Navbar';
import Sidebar from './Navbar/Sidebar';
import { SidebarContextProvider } from '../context/navbar.context';

const Header = () => {
  return (
    <SidebarContextProvider>
      <Navbar />
      <Sidebar />
    </SidebarContextProvider>
  );
};

export default Header;
