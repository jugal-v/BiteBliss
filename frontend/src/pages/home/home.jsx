// import React from 'react'
import { useState } from 'react'
import ExpolreMenu from '../../components/ExporeMenu/expolreMenu'
import Header from '../../components/Header/header'
import './home.css'
import FoodDisplay from '../../components/FoodDisplay/foodDisplay'
import AppDownload from '../../components/AppDownload/appDownload'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header></Header>
      <ExpolreMenu category = {category} setCategory={setCategory}></ExpolreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload/>
    </div>
  )
}

export default Home
