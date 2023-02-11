import React from "react";
import { useState } from "react";
import style from "./Navbar.module.css";
function Navbar() {
  const [isOpen,SetisOpen]=useState(false)
  return (
    <>
      <div className={style.feed__header}>
        <h2>Home</h2>

       <img src="https://tinypng.com/images/social/website.jpg" className={style.profile}/>
        <div className={style.innercontainer}>
        <h3>For you</h3>
        <h3>Following</h3>
      </div>
      </div>
    </>
  );
}
export default Navbar;
