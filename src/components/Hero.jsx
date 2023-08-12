import {Link} from 'react-router-dom';
import './Hero.css';

function Hero({ name, image, id }) {
  return (
    <div className='hero-wraper'>
      <Link to={`/superhero/${id}`} >
        <div><img src={image} alt="superhero-img" /></div>
        <h3 className='hero-name'>{name}</h3>
        </Link>
    </div>
  )
}

export default Hero;