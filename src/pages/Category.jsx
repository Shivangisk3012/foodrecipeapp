import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Category = () => {
  const { type } = useParams();
  console.log(type)


  const [category, setCategory] = useState([])

  useEffect(() => {
    fetchCateogary();
  }, [type])

  const fetchCateogary = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + type)
    const data = await response.json();
    console.log(data.meals)
    setCategory(data.meals)
  }

  


  return (
    <div className='grid grid-cols-3'>
      {category.map((item, index) => {
        return (
          <div key={index} className=' p-2'>
            <Link to={`/Recipe/${item.idMeal}`}>

              <div className='p-2'>

                <p className='font-bold text-lg mb-2'>{item.strMeal}</p>

                <img src={item.strMealThumb} alt={item.strMeal} className='h-48 w-full object-cover rounded-t-lg' />
              </div>
            </Link>
          </div>
        )
      })
      }
    </div>
  )
}

export default Category