// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import menubar from '../assets/Images/menubar.svg';
// import close from '../assets/Images/close.png'
// import { SidebarData } from './SideBar';
import './TopNav.css';
// import { Link } from 'react-router-dom';



function TopNav() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className='topbar'>

                <img src={menubar} alt="" onClick={showSidebar} className='menu-bar' />


            </div>
            <nav className={sidebar ? 'nav-menu.active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='nav-toggle'>
                        {/* <Link to='#'>
                            <img src={close} alt="" height={20} className='menu-bars' />
                        </Link> */}
                    </li>
                    {/* {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>{item.icon}<span>{item.title}</span></Link>
                            </li>
                        )
                    })} */}
                </ul>
            </nav>
        </>
    )
}

export default TopNav

// eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import burgerBar from '../assets/Images/menubar.svg';

// // eslint-disable-next-line react/prop-types
// function TopNav({ toggleSidebar }) {
//     return (
//         <div className='topbar'>
//             <Link to='#'>
//                 <img src={burgerBar} alt="" onClick={toggleSidebar} className='menu-bar' />
//             </Link>
//         </div>
//     );
// }

// export default TopNav;


