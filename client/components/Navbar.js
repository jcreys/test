import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    {/* <div className='navBar'>
      <ul>
        <li>
          <img className="imgNav" src="./images/logo.png" alt="" />
        </li>
        <li className ="head">
          <h1>FS-App-Template</h1>
        </li>
      </ul>
    </div> */}
    <nav className="navBar">
      {isLoggedIn ? (
        <div>
          <div className="ulist">
            <div className="listImg">
              <img className="imgNav" src="./images/logo.png" alt="" />
            </div>
            {/* The navbar will show these links after you log in */}
            <div className="listItem">
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <div className="ulist">
            <div className="listImg">
              <img className="imgNav" src="./images/logo.png" alt="" />
            </div>
            <div className="listItem">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
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

export default connect(mapState, mapDispatch)(Navbar);
