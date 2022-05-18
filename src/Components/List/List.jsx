import Data from "../API/Data.json"
import ListHeader from "./ListHeader"

import { Link } from "react-router-dom"

const List = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-around mx-4">
        {/* For list header */}
      <ListHeader/>
      </div>
      {
        /* Call data from API to make list */
        Data.map((car, index) => (
          <Link to={"detail/" + car.model} className="flex w-full items-center justify-around" key={index}>
            <div className="flex w-4/5 items-center justify-around bg-slate-400 my-2 ">
            <img src={car.coverImg} alt="" className=" h-10" />
            <p>{car.brand}</p>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.ENGINE}</p>
            <p>{car.oy}</p>
            <p>{car.yorum}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default List