import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Auth from '../src/Auth/Auth'
import WeatherBox from '../src/pages/WeatherBox.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element= {<Auth />} />
      <Route path='/WeatherBox' element= {<WeatherBox />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
