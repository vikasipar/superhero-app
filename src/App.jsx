import './App.css';
import {Link} from 'react-router-dom';
import CustomRoutes from './CustomRoutes';

function App() {

  return (
    <div>
      <h2 className="">
        <Link to="/">SUPERHEROES</Link>
      </h2>
      <CustomRoutes />
    </div>
  )
}

export default App
