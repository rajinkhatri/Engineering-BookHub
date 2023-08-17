import {Routes, Route} from 'react-router-dom';
import Login from './pages/login.jsx';
import Navbar from './pages/navbar.jsx';
import Register from './pages/Register.jsx';
//  import HomePage from './components/Homepage.jsx';
  import AddFaculty from './components/Homepage.jsx';
 import Books from './components/faculty1.jsx';
  import Courses from './pages/Courses.jsx';
  import Year from './pages/year.jsx';
  import HomePage from './components/booksyear1.jsx';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Year" element={<Year />} />
      {/* <Route path="/homepage/faculty" element={<Books />} />  */}
      <Route path="/Books" element={<HomePage />} /> 
    </Routes>
    </>
  );
}
export default App;