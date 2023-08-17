import {Routes, Route} from 'react-router-dom';
import Login from './pages/login.jsx';
import Navbar from './pages/navbar.jsx';
import Register from './pages/Register.jsx';
//  import HomePage from './components/Homepage.jsx';
  import AddFaculty from './components/Homepage.jsx';
 import Books from './components/faculty1.jsx';
  import Courses from './pages/Courses.jsx';
  import Year from './pages/year.jsx';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Courses/Year" element={<Year />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Login />} />
      { <Route path="/homepage/faculty" element={<Books />} /> }
      { <Route path="/Books" element={<AddFaculty />} /> }
      {/* { <Route path="/result" element={<ResultPage />} /> } */}
    </Routes>
    </>
  );
}
export default App;