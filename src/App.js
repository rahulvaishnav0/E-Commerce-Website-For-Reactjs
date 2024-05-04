import Home from "./component/Home/Home";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About from "./component/About/About";
import Services from "./component/Services/Services";
import Navbar from "./component/Navbar/Navbar";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
function App() {
  return (
   <>
   <Navbar/>
   <BrowserRouter>
   <Routes>
    <Route path="/Home"  element={<Home/>}/>
    <Route path="/About"  element={<About/>}/>
    <Route path="/Services"  element={<Services/>}/>
    <Route path="/Contact"  element={<Contact/>}/>

   </Routes>
   </BrowserRouter>

   <Home/>
   <About/>
   <Services/>
   <Contact/>  
   <Footer/>
   </>
  );
}

export default App;
