import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import './Nav.css'

const Nav = ({handleInputChange, Query}) => {
  return (
    <nav>
      <div className='nav-container'>
        <input type="text" placeholder='Enter Shoe Name' className='search-bar' value={Query} onChange={handleInputChange}/>
      </div>
      <div className='profile-container'>
        <a href="#">
          <FaRegHeart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>
      
    </nav>
  )
}

export default Nav