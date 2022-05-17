import {useParams} from "react-router-dom";
import Data from '../API/Data.json'

function Searched() {
    // which is coming from navigate hook at the Header page to use show car detail
    let {search} = useParams();
        //TODO Make search input lower and upper case
    return (
        <div>
            {
                Data.map((item) => {
                    return (
                        <div key={item.id}>
                        {search === item.brand.toLowerCase().toUpperCase() || search === item.model.toLowerCase().toUpperCase() ? <p>{item.model}</p> : null}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Searched