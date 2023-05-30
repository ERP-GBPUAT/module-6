import Home from './components/Home/Home';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Login from './components/Login/Login';
import FacultyProfile from './components/Profile'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import AccessibleTable from './components/MarksTable';
import { useState } from 'react';
import Dropdown from './components/Dropdown'
import BasicSelect from './components/Dropdown';
function App() {
  const [year,setYear]=useState(2019);
  const [showMarks,setShowMarks] = useState(false);
  return (
    <BrowserRouter>
    <ResponsiveAppBar setShowMarks = {setShowMarks}/>
   {!showMarks ?  <>
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path={"/"} element={<Home />}/>
        {/* <Route path={"/login"} element={<Login />}/> */}
        <Route path={"/profile"} element={<FacultyProfile />} />
      </Routes>
    </div>
   </> :<> <div><BasicSelect year={year} setYear={setYear}/></div><AccessibleTable year={year} /></>}
    </BrowserRouter>
  );
}

export default App;
