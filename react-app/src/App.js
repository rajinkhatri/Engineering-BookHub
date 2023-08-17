import {Routes, Route} from 'react-router-dom';
import Login from './pages/login.jsx';
import Navbar from './pages/navbar.jsx';
import Register from './pages/Register.jsx';
// import HomePage from './components/Homepage.jsx';
import AddFaculty from './components/Homepage.jsx';
import Books from './components/faculty1.jsx';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/homepage" element={<AddFaculty />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/homepage/faculty" element={<Books />} />
      {/* <Route path="/result" element={<ResultPage />} /> */}
    </Routes>
    </>
  );
}

export default App;