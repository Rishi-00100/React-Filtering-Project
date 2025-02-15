import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

//Database;
import product from './DataBase/Data'
import Card from './Components/Card'

const App = () => {
  const [SelectedCategory, setSelectedCategory] = useState(null)

  //-----Input Filter-----
  const [Query, setQuery] = useState('')

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredItems = product.filter((product) => product.title.toLocaleLowerCase().indexOf(Query.toLocaleLowerCase()) !== -1)


  //-----Radio Filter-----
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  //-----Button Filter-----
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(product, selected, Query) {
    let filteredProduct = product;

    //filtering input items
    if(Query) {
      filteredProduct = filteredItems
    }

    //selected filter
    if(selected){
      filteredProduct = filteredProduct.filter(({category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
    }

    return filteredProduct.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      <Card key = {Math.random()} 
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice}
      />
    ))
  }

  const result = filteredData(product, SelectedCategory, Query);

  return (
    <>
      <Sidebar handleChange = {handleChange}/>
      <Nav Query={Query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  )
}

export default App