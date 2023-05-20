import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


function Trending() {
  const [nonVeggies, setnonVeggies] = useState([])

  useEffect(() => {
    fetchnonVeggies();
  }, [])

  const fetchnonVeggies = async () => {
    const check = localStorage.getItem("nonvegreciepe");
    if(check){
      setnonVeggies(JSON.parse(check).meals)
    }else{
      try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken");
        const data = await response.json();
        localStorage.setItem("nonvegreciepe", JSON.stringify(data));
        setnonVeggies(data.meals.slice(0, 10))
      }catch(err){
        console.log(err)
      }
    }

  }

  async function fetchrecipe(id){
    const response = await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i="+id);
    const data = await response.json();
  }

  return (
    <motion.div className=' h-[50%]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}>

      <Splide className='p-2' options={{
        perPage: 4,
        gap: "1rem",
        arrows: false,
        pagination: false,
        drag: 'free'
      }}>
        {
          nonVeggies.map((item) => {
            return (<SplideSlide key={item.idMeal}>
              <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
                className='rounded-xl flex flex-col justify-center items-center'
              >
                <Link to={`/Recipe/${item.idMeal}`}>
                <img className='w-full opacity-70 rounded-xl h-full' src={item.strMealThumb} alt={item.strMeal} />
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
export default Trending