import { useEffect, useState } from 'react';
import Hero from './Hero';
import axios from 'axios';

function Superheros() {

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
                image : superhero.images.md,
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
    }

    const nextHandler = () => {
        setStart(start+totalHeros);
    }

  return (
    <div>
        <h1>Superheros</h1>
        
        {(isLoading) ? 'Loading...' : 
            superHeros.map((p) => <Hero name={p.name} image={p.image} key={p.id} /> )
        }

        <button onClick={prevHandler} disabled={start === 0}>Prev</button>
        <button onClick={nextHandler}>Next</button>

    </div>
  )
}

export default Superheros;