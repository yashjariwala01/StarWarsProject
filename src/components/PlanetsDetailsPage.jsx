import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Navbar from './NavBar';
import Accordion from './Accordion';

const PlanetsDetailsPage = () => {
    const planetDetails = useSelector((state)=> state.planetDetails);
    const residentUrls = planetDetails.residents || [];
    const planetFilms = planetDetails.films || [];
    const [residents, setResidents] = useState([]);
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchResidents(residentUrls){
        try {
            setLoading(true);
            const residentData = await Promise.all(
              residentUrls.map(async (url) => {
                const response = await axios.get(url);
                return response.data;
              })
            );
            setResidents(residentData);
            setLoading(false);
          } catch (error) {
            setError('Error fetching residents');
            setLoading(false);
          }
    }

    async function fetchFilms(films){
      try {
          setLoading(true);
          const filmData = await Promise.all(
            films.map(async (url) => {
              const response = await axios.get(url);
              return response.data;
            })
          );
          setFilms(filmData);
          setLoading(false);
        } catch (error) {
          setError('Error fetching films');
          setLoading(false);
        }
  }

    useEffect(()=>{
        fetchResidents(residentUrls);
        fetchFilms(planetFilms);
    },[planetDetails]);

  return (
   <div>
      <Navbar/>
     <div className="bg-gray-900 text-white min-h-screen py-8">
      <div className="container mx-auto flex flex-col gap-10 justify-center items-center">
        {error && <div>Error: {error}</div>}
          {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-200 mr-2"></div>
              <span>Loading...</span>
            </div>
          </div>
        )}
        {planetDetails && (
          <div className="w-full  bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Planet Name - {planetDetails.name}</h2>
            <div className='flex flex-wrap gap-4'>
              <p className="w-full sm:w-1/2"><span className="font-bold">Climate:</span> {planetDetails.climate}</p>
              <p className="w-full sm:w-1/2"><span className="font-bold">Terrain:</span> {planetDetails.terrain}</p>
              <p className="w-full sm:w-1/2"><span className="font-bold">Diameter:</span> {planetDetails.diameter}</p>
              <p className="w-full sm:w-1/2"><span className="font-bold">Population:</span> {planetDetails.population}</p>
              <p className="w-full sm:w-1/2"><span className="font-bold">Surface Water:</span> {planetDetails.surface_water}</p>
            </div>
          </div>
        )}
        <div className="w-full bg-gray-800 p-8 rounded-lg"> 
          <h3 className="text-xl font-bold mb-2">Films:</h3>
          {films.length > 0 ? (
            <div>
              {films.map((film, index) => (
                <Accordion key={index} title={film.title}>
                  <p>{film.opening_crawl}</p>
                </Accordion>
              ))}
            </div>
          ) : (
            <p>No films available</p>
          )}
        </div>

        <div className="w-full  bg-gray-800 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Residents:</h3>
          {residents.length > 0 ? (
            <div>
              {residents.map((resident, index) => (
                <Accordion key={index} title={resident.name}>
                  <p><span className="font-bold">Height:</span> {resident.height}</p>
                  <p><span className="font-bold">Mass:</span> {resident.mass}</p>
                  <p><span className="font-bold">Hair Color:</span> {resident.hair_color}</p>
                </Accordion>
              ))}
            </div>
          ) : (
            <p>No residents available</p>
          )}
        </div>
      </div>
    </div>
   </div>
  );
};

export default PlanetsDetailsPage