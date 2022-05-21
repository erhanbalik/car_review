/* IMPORT PACKAGES */
import { BrowserRouter } from "react-router-dom";
/* IMPORT ASSETS */
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Pages from "./Components/Pages/Pages";
import {useAuth0} from '@auth0/auth0-react';


function App() {
  const { isLoading } = useAuth0();

    // Checkin content loading
  if(isLoading) return <div className="flex items-center justify-center h-screen text-7xl text-red-500">Loading....</div>

  // After loading done show main content
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
