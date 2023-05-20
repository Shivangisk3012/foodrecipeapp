import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'


export const Searched = () => {
    const { search } = useParams();
    console.log(search)

    const [SearchRecipes, setSearchRecipes] = useState([]);

    const getSearched = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
        const data = await response.json()
        console.log(data)
        setSearchRecipes(data.meals)

    }
    useEffect(() => {
        getSearched()
    }, [search])

    return (
        <div>
            <Link to={"/"}>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Go back to home</button>
            </Link>
            {SearchRecipes && SearchRecipes.map((item, index) => (
                <div key={index} className="my-8" >
                    <h1 className="text-3xl font-bold mb-2">{item.strMeal}</h1>
                    <img src={item.strMealThumb} alt={item.strMeal} className="w-52 mb-4 rounded" />
                    <p className="text-lg">{item.strInstructions}</p>
                </div>
            ))}
        </div>
    )
}
