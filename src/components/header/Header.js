import React from "react";
import logo from "../../assets/img/neowork.png";
import avatar from "../../assets/img/avatar.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import "../../assets/css/header.css";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../store/userSlice"

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  const logoutApp = () => {
    dispatch(logout);
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutApp} />
      </div>
    </div>
  );
}

export default Header;
