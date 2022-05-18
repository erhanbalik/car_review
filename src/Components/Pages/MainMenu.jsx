import Brands from "../Brands/Brands";
import Hero from "../Hero/Hero";
import MostComment from "../MostComment/MostComment";
import MostRated from "../MostRated/MostRated";
import List from "../List/List"

const MainMenu = () => {
  return (
    <div className='flex flex-col'>
        <Hero />
        <Brands/>
        <MostRated/>
        <MostComment/>
        <List/>
    </div>
  )
}

export default MainMenu