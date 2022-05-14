import React from "react";
import useProducts from "./useMenu";

const Menu = () => {
    const {
        handleButtonTypeClick,
    } = useProducts();

    return (
    <div className='main'>
      <p> MENU </p>
      <div className='menu-types'>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'breakfast'}>Café da manhã</button>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'allDay'}>All Day</button>
        </div>    
    </div>
    );
};
export default Menu;