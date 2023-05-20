import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Veggies() {



  // creating the state to hold the vegetarian recipes
  const [veggies, setVeggie] = useState([])

  // when dependency array is not given -> useEffect will run for each change in state

  // when depedency array is given but empty -> useEffect will run only one time

  // when depedency array is given and contain one or more elements or state or variable etc -> useEffect will run when the
  // elements in the dependency array is updated
  useEffect(() => {
    fetchVeggie();
  }, [])

  const fetchVeggie = async () => {
    const check = localStorage.getItem("vegreciepe");
    if (check) {
      setVeggie(JSON.parse(check).meals)
    }
    else{
      try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian")
        const data = await response.json();
        localStorage.setItem("vegreciepe", JSON.stringify(data))
        setVeggie(data.meals.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    }
  }

  // async function fetchrecipe(id) {
  //   const response = await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
  //   console.log("www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
  //   const data = await response.json();
  //   console.log(data)
  // }


  return (
    <motion.div className='h-[40%]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <Splide className='p-2' options={{
        perPage: 4,
        gap: "1rem",
        arrows: false,
        pagination: false,
        drag: 'free'
      }}>
        {
          veggies.map((item) => {
            return (<SplideSlide key={item.idMeal}>
              <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
                className='rounded-xl flex flex-col justify-center items-center'
                onClick={() => { fetchrecipe(item.idMeal) }}
              >
                <Link to={`/Recipe/${item.idMeal}`}>
                <img className='rounded-t-xl w-full opacity-80 h-full object-fill' src={item.strMealThumb} alt={item.strMeal} />
                <p>{item.strMeal}</p>
                </Link>
              </motion.div>
            </SplideSlide>)
          })
        }
      </Splide>
    </motion.div>
  )
}

export default Veggies