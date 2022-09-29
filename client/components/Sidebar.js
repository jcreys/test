import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"><Link to="/home">Run Club</Link></span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"> MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <span>
              <PersonOutlineIcon className="icon"/>
              Users
            </span>
          </li>
          <li>
            <span>
              <StoreIcon className="icon"/>
              Products
            </span>
          </li>
          <li>
            <span>
              <CreditCardIcon className="icon"/>
              Orders
            </span>
          </li>
          <li>
            <span>
              <LocalShippingIcon className="icon"/>
              Delivery
            </span>
          </li>
          <p className="title"> USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <span>
              <NotificationsNoneIcon className="icon"/>
              Notifications
            </span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <span>
              <PersonOutlineIcon className="icon"/>
              System Health
            </span>
          </li>
          <li>
            <span>
              <PersonOutlineIcon className="icon"/>
              Logs
            </span>
          </li>
          <li>
            <span>
              <SettingsApplicationsIcon className="icon"/>
              Settings
            </span>
          </li>
          <p className="title">USER</p>
          <li>
            <span>
              <AccountCircleOutlinedIcon className="icon"/>
              Profile
            </span>
          </li>

          <li>
            <span>
              <LogoutIcon className="icon"/>
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
