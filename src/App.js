import Brands from "./Components/Brands/Brands";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import MostComment from "./Components/MostComment/MostComment";
import MostRated from "./Components/MostRated/MostRated";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brands />
      <MostRated/>
      <MostComment/>
    </div>
  );
}

export default App;
