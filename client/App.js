import React from "react";
import Sidebar2 from "./components/Sidebar2";
import Navbar2 from "./components/Navbar2";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <Navbar2 />
      <div className="container">
        <Sidebar2 />
        <div className="home">
          <Routes />
        </div>
      </div>
    </div>
  );
};

export default App;
