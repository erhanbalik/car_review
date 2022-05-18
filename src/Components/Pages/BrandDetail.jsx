import Data from '../API/Data.json'
import {useParams} from "react-router-dom";

const BrandDetail = () => {
  let {brand} = useParams();


  return (
    <div className='w-full flex flex-col items-start justify-around'>
      <p className="border-b-2 border-blue-600">{brand}</p>
      { // Get car brand models to write screen
        Data.map((model, index) => {
          return (
              <div key={index}>
                {brand === model.brand ? <p className='border-b-2 border-gray-500'>{model.model} </p>
                    : null
                }
              </div>
            ) 
        }
        )
      }
    </div>
  )
}

export default BrandDetail