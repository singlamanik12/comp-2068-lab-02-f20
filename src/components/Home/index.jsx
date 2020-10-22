import React from "react";
// You need to import your shared header...
import Header from "./../shared/Header/index";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header title="Home" />
      {/* You need a link to your about page as a call to action */}
      <Link to="/about"><button type="button" className="btn btn-primary">About</button></Link>
    </>
  );
};

export default Home;
