import { CiPizza } from 'react-icons/ci';
import { CiBurger } from 'react-icons/ci';
import { TbSoup } from 'react-icons/Tb';
import { GiChopsticks } from 'react-icons/Gi';
import { BsSearch } from 'react-icons/Bs';
import { ImSpoonKnife } from 'react-icons/im';
import { motion } from "framer-motion"
import { Link ,useNavigate} from "react-router-dom"
import { useState } from 'react';


function Header() {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
      };
    

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        // try {
        //   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
        //   const data = await response.json();
        //   const recipeId = data.meals[0].idMeal;
          navigate(`/Searched/${searchValue}`);
      //  } catch (error) {
//         console.error(error);
        }
   //   };
    
    
    return (
        <motion.div className=''
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring" }}
            variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className='flex gap-2 pt-5 justify-start items-center'>
                <ImSpoonKnife size={"20px"} /><p className='text-2xl font-crusive'>delicious</p>
            </div>
            <div className=' flex flex-col gap-5 justify-center items-center pt-8 '>
                <div className='w-[50%] relative ' >
                    <BsSearch className='absolute top-3 left-4 text-white' size={"15px"} color={"white"} />
                    <form onSubmit={handleSearchSubmit}>

                    <input className='border-1 outline-transparent border-black w-full  pl-10 py-1 rounded-lg bg-gray-800 text-white'
                     type="text"
                     placeholder="Search for a recipe..."
                     value={searchValue}
                     onChange={handleSearchInputChange}
                     />
                           <button type="submit"></button>

                     </form>
                </div>

                <div className=' flex justify-between text-[0.6rem] gap-2 text-white  w-[30%]'>
                    <Link to={"/Category/Italian"} className='bg-gray-800 h-14 w-14 rounded-full flex flex-col justify-center items-center ' >
                        <CiPizza size={"20px"} color={"white"} />
                        Italian
                    </Link>
                    <Link to={"/Category/American"} className='bg-gray-800 h-14 w-14 rounded-full flex  flex-col justify-center items-center'>
                        <CiBurger size={"20px"} color={"white"} />
                        American
                    </Link>
                    <Link to={"/Category/Thai"} className='bg-gray-800 h-14 w-14 rounded-full flex flex-col justify-center items-center'>
                        <TbSoup size={"20px"} color={"white"} /> Thai
                    </Link>
                    <Link to={"/Category/Japanese"} className='bg-gray-800  h-14 w-14 rounded-full flex  flex-col justify-center items-center'>
                        <GiChopsticks size={"20px"} color={"white"} /> Japanese</Link>
                </div>


            </div>
        </motion.div>
    )
}

export default Header