import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './component/About';
import Contact from './component/Contact';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
