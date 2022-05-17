/* IMPORT PACKAGES */
import { BrowserRouter } from "react-router-dom";
/* IMPORT ASSETS */
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Pages from "./Components/Pages/Pages";

function App() {
  
  return (
    <div className="App flex flex-col h-screen justify-between">
      <BrowserRouter>
        <Header />
        <Pages/>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
