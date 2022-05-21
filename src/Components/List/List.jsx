import Data from "../API/Data.json"
import ListHeader from "./ListHeader"

import { Link } from "react-router-dom"

const List = () => {
  return (
    <div className=" mt-6">
      <div className="flex w-full items-center justify-around mb-2">
        {/* For list header */}
      <ListHeader/>
      </div>
      {
        /* Call data from API to make list */
        Data.map((car, index) => (
          <Link to={"detail/" + car.model} className="flex w-full items-center justify-around" key={index}>
            <div className="flex w-11/12 items-start justify-around bg-gray-300 my-2 ">
            <p className="w-3">{car.brand}</p>
            <p className=" w-16 text-left">{car.model}</p>
            <p>{car.year}</p>
            <p className="w-1">{car.ENGINE}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default List