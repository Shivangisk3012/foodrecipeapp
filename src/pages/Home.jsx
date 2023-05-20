import Veggies from "../components/Veggies"
import Trending from "../components/Trending"

function Home() {

  let counter = 0

  return (
    <div className=" space-y-3">
      <Veggies />
      <Trending />
    </div>

  )
}

export default Home