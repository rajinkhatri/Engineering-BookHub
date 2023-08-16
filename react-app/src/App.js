import {Routes, Route} from 'react-router-dom';
import Login from './pages/login.jsx';
import Navbar from './pages/navbar.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Login />} />
      {/* <Route path="/result" element={<ResultPage />} /> */}
    </Routes>
    </>
  );
}

export default App;