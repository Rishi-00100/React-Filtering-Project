import React from 'react'
import './Sidebar.css'
import { CiShoppingCart } from 'react-icons/ci'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import Category from './Category/Category'

const Sidebar = ({handleChange}) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <CiShoppingCart />
          </h1>
        </div>

        <Category handleChange = {handleChange} />
        <Price handleChange = {handleChange}/>
        <Colors handleChange = {handleChange}/>
      </section>
    </>
  )
}

export default Sidebar