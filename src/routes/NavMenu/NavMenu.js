import React, { useState } from 'react';
import './NavMenu.scss'
import Topbar from './TopBar/Topbar';
import Menu from './Menu/Menu';

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false)

  function clickHandler() {
    setMenuOpened( prevState => !prevState)
  }
  return (
    <div className='navbar-container'>
      <Topbar 
        menuOpened={menuOpened}
        handleClick={clickHandler}
      />
      <Menu 
        menuOpened={menuOpened}
        handleClick={clickHandler}
      />
    </div>
  );
}
