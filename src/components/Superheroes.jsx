import { useEffect, useState } from 'react';
import "./Superheroes.css";
import Hero from './Hero';
import axios from 'axios';

function Superheroes() {

    const [isLoading, setIsLoading] = useState(true);
    const [superHeros, setSuperHeros] = useState([]);
    const [start, setStart] = useState(0);
    const totalHeros = 20;

    async function superdata(){
        try{
            const response = await axios.get(`https://akabab.github.io/superhero-api/api/all.json`);
            const result = response.data;

            const newSuperHeros = result.slice(start, start+totalHeros).map((superhero) => ({
                id : superhero.id,
                name : superhero.name,
                image : superhero.images.sm,
            }));
            setSuperHeros(newSuperHeros);
            setIsLoading(false);
        }catch(error){
            console.error("Api Error");
            setIsLoading(false);
        }   
    }

    useEffect(() => {
        superdata();
    }, [start]);

    const prevHandler = () => {
        if(start >= totalHeros){
            setStart(start-totalHeros);
        }
        window.scrollTo({top:0, behavior:"smooth"});
    }

    const nextHandler = () => {
        setStart(start+totalHeros);
        window.scrollTo({top:0, behavior:"smooth"});
    }

  return (
    <div> 
        <div className='container'>
            {(isLoading) ? <div className='spinner-wrapper'> <div className='spinner' > </div> </div> : 
                superHeros.map((p) => <Hero name={p.name} image={p.image} key={p.id} id={p.id} /> )
            }
        </div>
        <div className='btn-wraper'>
            <button onClick={prevHandler} disabled={start === 0}>Prev</button>
            <button onClick={nextHandler}>Next</button>
        </div>
    </div>
  )
}

export default Superheroes;