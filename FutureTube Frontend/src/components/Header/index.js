import React, { useState } from "react";
import mock from "../../assets/seu-madruga.jpeg";
import style from "./style.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Header = ({
  onLogout,
}) => {
  const [menu, setMenu] = useState(null);

  const handleClick = event => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  return (
    <div>
      <header className={style.headerWrapper}>
        <img src={mock} className={style.avatar} onClick={handleClick} />
        <Menu
          id="simple-menu"
          anchorEl={menu}
          keepMounted
          open={Boolean(menu)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Perfil</MenuItem>
          <MenuItem onClick={handleClose}>Meus vídeos</MenuItem>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      </header>
    </div>
  );
};

export default Header;
