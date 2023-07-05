// import React from "react"

import "./header.css"
import Moon from "../../assets/whitelogo.svg"

const Header = () => {
  
  return (
    <header className="header py-4">
    <div className="container">
    <div className="wrapper d-flex justify-content-between align-items-center">
    <a className="header__logo" href="#">Where in the world?</a>
    <div className="d-flex align-items-center">
    <img className="me-2" src={Moon} width={20} height={20} alt="header logo" />
    <span className="header__dark">Dark Mode</span>
    </div>
    </div>
    </div>
    </header>
    )
    
  }
  
  export default Header