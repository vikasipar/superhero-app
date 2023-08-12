import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SuperHeroDetails.css';
import axios from 'axios';

function SuperheroDetails() {
    const {id} = useParams();
    const [info, setInfo] =useState({});
    const [isLoading, setIsLoading] =useState({});

    async function getSuperhero(){
        const response = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
        console.log(response.data.name);

        setInfo({
            name : response.data.name,
            fullname : (response.data.biography.fullName)? response.data.biography.fullName : "Unknown",
            work: (response.data.work.occupation!="-")?response.data.work.occupation:"Unknown",
            image : response.data.images.md,
            race : (response.data.appearance.race == "")? response.data.appearance.race:"Human",
            gender : response.data.appearance.gender,
            eye : response.data.appearance.eyeColor,
            hair : response.data.appearance.hairColor,
            intelligence : response.data.powerstats.intelligence,
            strength : response.data.powerstats.strength,
            power : response.data.powerstats.power,
            speed : response.data.powerstats.speed,
            publisher: response.data.biography.publisher,
        })
        setIsLoading(false);
    }

    useEffect(() => {
        getSuperhero();
    }, [id]);

  return (
    <div className=''>
        {isLoading ? (
            <div className='spinner-wrapper'>
                <div className="spinner"></div>
            </div>
        ) : (
            <div className='container'>
                <div className='info'>
                    <h2>{info.name}</h2>
                    <h3>Name : {info.fullname}</h3>
                    <div className='appearance'>
                        <h3>Race : {info.race}</h3>
                        <h3>Gender : {info.gender}</h3>
                    </div>
                    <h3>Occupation : {info.work}</h3>
                    <div className='power-stat'>
                        <h3>Intelligence : {info.intelligence}</h3>
                        <h3>Power : {info.power}</h3>
                        <h3>Strength : {info.strength}</h3>
                        <h3>Speed : {info.speed}</h3>
                    </div>
                </div>
                <div className='image'> 
                    <img src={info.image} alt={info.name} />
                </div>
            </div>
        )}
    </div>
  )
}

export default SuperheroDetails;