import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';


function Recipe() {
    const {id} = useParams();
    console.log(id)
    
  
  const [recipe,setRecipe]=useState([])
  
    useEffect(()=>{
    fetchCateogary();
    },[id])
  
    const fetchCateogary=async ()=>{
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
      const data = await response.json();
      console.log(data.meals)
    setRecipe(data.meals)
    }
  
  return (
    <div >
        <Link to={"/"}>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Go back to home</button>
        </Link>

        {recipe.map((item, index) => (
        <div key={index} className="my-8" >
          <h1 className="text-3xl font-bold mb-2">{item.strMeal}</h1>
          <img src={item.strMealThumb} alt={item.strMeal} className="w-52 mb-4 rounded"/>
          <p className="text-lg">{item.strInstructions}</p>
        </div>
      ))}


    </div>
  )
}

export default Recipe