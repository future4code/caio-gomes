import React from "react";
import style from "./style.module.css";
import UserCard from "../../components/UserCard";
import AccountOptions from "../../components/AccountOptions";

const SideMenu = () => {
  return (
    <div className={style.container}>
      <UserCard />
      <AccountOptions/>
    </div>
  );
};

export default SideMenu;
