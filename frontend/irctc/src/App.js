import NavBar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookingFrom from './components/BookingFrom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/booking" element={<BookingFrom />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
