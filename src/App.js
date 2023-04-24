import Home from './components/Home/Home';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/login"} element={<Login />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
