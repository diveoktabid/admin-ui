import React, { useContext, useState } from 'react'
import Logo from '../Elements/Logo';
import Input from '../Elements/Input';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Icon from '../Elements/Icon';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/themeContext';
import { AuthContext } from '../../context/authContext';
import { logoutService } from '../../services/authService.jsx';    

function MainLayout(props) {
    const { children } = props;
    const [loading, setLoading] = useState(false);

const themes = [
  { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
  { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
  { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
  { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
  { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
];

const { theme, setTheme } = useContext(ThemeContext);

    const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction", },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

    const { user, logout } = useContext(AuthContext);
    
    const handleLogout = async () => {
    try {
      setLoading(true);
      await logoutService();
      logout(); 
    } catch (err) {
      console.error(err);
      if (err.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <div className={`flex h-screen overflow-hidden ${theme.name}`}>
            <aside className='bg-defaultBlack w-28 sm:w-64 text-special-bg2 flex flex-col justify-between px-7 py-12 overflow-hidden'>
                <div className='flex-shrink-0'>
                    <div className='mb-10'>
                        <Logo variant="secondary" />
                    </div>
                    <nav className='space-y-1'>
                        {menu.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.link}
                                className={({ isActive }) =>
                                    `flex px-4 py-3 rounded-md hover:text-white hover:font-bold hover:scale-105 ${
                                        isActive
                                            ? "bg-primary text-white font-bold"
                                            : "hover:bg-special-bg3"
                                    }`
                                }
                            >
                            <div className="mx-auto sm:mx-0">{item.icon}</div>
                            <div className="ms-3 hidden sm:block">{item.name}</div>
                            </NavLink>
                        ))}
                    </nav> 
                </div>
            <div className='flex-shrink-0'>
            <div className='mb-4 text-sm text-gray-03'>Themes</div>
            <div className="flex flex-col sm:flex-row gap-2 items-center mb-6">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer`}
                  onClick={() => setTheme(t)}
                ></div>
              ))}
            </div>
          </div>
                <div className='flex-shrink-0'>
                    <div onClick={handleLogout} className="cursor-pointer mb-6">
                    <div className='flex bg-special-bg3 text-white px-4 py-3 rounded-md hover:bg-opacity-80 transition-all'>
                        <div className='mx-auto sm:mx-0 text-primary'>
                            <Icon.Logout />
                        </div>
                        <div className='ms-3 hidden sm:block'>Logout</div>
                    </div>
                </div>

                    <div className='border-t border-special-bg mb-6'></div>
                    <div className='flex justify-between items-center'>
                        <div className='text-gray-03 hidden sm:block'>Avatar</div>
                        <div className='hidden sm:block'>
                        <div className='font-semibold'>{user.name}</div>
                            <div className='text-xs text-gray-03 mt-1'>View Profile</div>
                        </div>
                        <div className='hidden sm:block cursor-pointer'>
                            <Icon.Detail size={15} />
                        </div>
                    </div>
                </div>
            </aside>
            <div className='bg-special-mainBg flex-1 flex flex-col overflow-hidden'>
                <header className='border-b border-gray-05 px-6 py-7 flex justify-between flex-shrink-0'>
                    <div className='flex items-center'>
                        <div className='font-bold text-2xl me-6'><div>{user.name}</div></div>
                        <div className='text-gray-03 flex'>
                            <Icon.ChevronRight size={20} />
                            <span>May 19, 2023</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='me-10'>
                            <NotificationsIcon className='text-primary scale-110'/>
                        </div>
                        <Input backgroundColor="bg-white" border="boreder-white" />
                    </div>
                </header>
                <main className='flex-1 px-6 py-4 overflow-y-auto'>{children}</main>
            </div>
        </div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <div className="flex flex-col items-center gap-4">
            <CircularProgress color="inherit" size={50} />
            <div className="text-white text-lg font-medium">Logging out</div>
          </div>
        </Backdrop>
    </>
  )
}

export default MainLayout