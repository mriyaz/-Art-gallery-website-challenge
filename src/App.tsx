import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LocationMap from './components/LocationMap';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/location' element={<LocationMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardForm />} />
        <Route path='/completion' element={<CardSubmitted />} />
      </Routes>
    </BrowserRouter> */}
