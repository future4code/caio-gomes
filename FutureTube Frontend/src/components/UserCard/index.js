import React from "react";
import style from "./style.module.css";
import { connect } from "react-redux";

const UserCard = ({ user }) => {
  return (
    <div className={style.container}>
      <img src={user.photo} className={style.userPhoto} />
      <div className={style.nameWrapper}>
        <p className={style.userName}>{user.firstName}</p>
        <p className={style.userName}>{user.lastName}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.selectedUser
  };
};

export default connect(mapStateToProps, null)(UserCard);
