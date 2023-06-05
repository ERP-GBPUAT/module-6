import Home from './components/Home/Home';
import './App.css';     
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import StudentProfile from './components/StudentProfile';
import StudentList from './components/StudentList';
function App() {
  useEffect(() => {
    const recMsg = (e) => {
      e.preventDefault();
      console.log('data', e.data);
      if (!e.data.token) {
        return;
      }
      localStorage.setItem('token', e.data.token);
      localStorage.setItem('data', e.data.user);
    };
    window.addEventListener('message', recMsg);
    return () => {
      window.removeEventListener('message', recMsg);
    };
  }, []);
  
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/student/:studentId"} element={<StudentProfile />} />
        <Route path={"/students/:batch/:department"} element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
