import {Routes, Route} from 'react-router-dom';
import Superheros from './components/Superheroes';
import SuperheroDetails from './components/SuperheroDetails';


function CustomRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Superheros />} />
        <Route path="/superhero/:id" element={<SuperheroDetails /> } />
    </Routes>
  )
}

export default CustomRoutes;