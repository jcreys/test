import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

function Navbar2({ handleClick, isLoggedIn }) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Body Improvement Club</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <div className="dropdown">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHHZ5wWQ_5STg/profile-displayphoto-shrink_200_200/0/1639623814731?e=1669852800&v=beta&t=wWADDsSbBpZDgxy4Oev5XzJaa6x69jl5RqRHF4dNQsE"
              alt=""
              className="topAvatar"
            />
            <div class="dropdown-content">
              {isLoggedIn ? (
                <div className="login">
                  {/* The navbar will show these links after you log in */}
                  <Link to="/home">Home</Link><br></br>
                  <a href="#" onClick={handleClick}>
                    Logout
                  </a>
                </div>
              ) : (
                <div className="login">
                  {/* The navbar will show these links before you log in */}

                  <Link to="/login">Login</Link><br></br>
                  <Link to="/signup">Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar2);
