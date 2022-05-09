import Brands from "./Components/Brands/Brands";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import MostComment from "./Components/MostComment/MostComment";
import MostRated from "./Components/MostRated/MostRated";

import data from "./API/data.json";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brands />
      <MostRated/>
      <MostComment/>
      {
        data.map((data) => (
          <div>{data.brand}
          <img src={data.coverImg} alt="" />
          </div>
        ))
      }
    </div>
  );
}

export default App;
