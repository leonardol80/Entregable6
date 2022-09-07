import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const handleBurger=()=>{
    const toggle=document.querySelector(".toggle");
    const ul=document.querySelector("ul");
    toggle.addEventListener("click",() => {
    ul.classList.toggle("shownav");
});
  }

  return (
    <header className="header">
      <NavLink className='header__contenedor-logo' to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/login">
            <i className="fa-regular fa-user fa-2x"></i>  
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/purchases">
            <i className="fa-solid fa-store fa-2x"></i>  
            </NavLink>
          </li>
          {/* <li className="header__item">
            <p className="header__link"><i class="fa-solid fa-cart-shopping fa-2x"></i></p>
          </li> */}
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/cart">
            <i className="fa-solid fa-cart-shopping fa-2x"></i>  
            </NavLink>
          </li>
        </ul>
        <div className="toggle">
          <img className="imagen_burguer" onClick={handleBurger} src="./img/burguer.png" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
