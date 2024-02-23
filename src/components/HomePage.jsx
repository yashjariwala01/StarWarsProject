import React from 'react';
import { fetchPlanets } from '../redux/Actions/apiActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { planetDetails } from '../redux/Actions/detailActions';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1);
    const { loading, data, error } = useSelector(state => state.planets);

    const changePage = (page) => {
        setPageNumber(page);
    }
    const btns = new Array(6).fill(1);

    useEffect(() => {
        dispatch(fetchPlanets(pageNumber));
    }, [dispatch, pageNumber]);

    const handleClick = (planet) => {
        dispatch(planetDetails(planet));
        navigate(`/item/${planet.name}`);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen py-8">
            <div className='container mx-auto flex flex-col gap-10 justify-center items-center'>
                {loading ? (
                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
                 <div className="flex items-center">
                   <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-200 mr-2"></div>
                   <span>Loading...</span>
                 </div>
               </div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    <>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
                            {data.results &&
                                data.results.map((planet, index) => (
                                    <div key={index} className="bg-gray-800 border p-3 shadow-lg border-gray-600 rounded cursor-pointer transition duration-300 transform hover:scale-105 mx-3" onClick={() => handleClick(planet)}>
                                        <p className="text-lg font-semibold text-yellow-400">Planet {planet.name}</p>
                                        <p className="text-gray-300">Climate: {planet.climate}</p>
                                        <p className="text-gray-300">Population: {planet.population}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-5'>
                            <button className={`${pageNumber === 1 ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-500'} p-2 rounded-2xl`} disabled={pageNumber > 1 ? false : true} onClick={() => setPageNumber(prev => prev - 1)}>Previous</button>
                           <div className='flex flex-wrap gap-3'>
                           {btns.map((item, index) => (
                                <button key={index} className={`${pageNumber === index + 1 ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300'} px-2 py-1 rounded-md`} onClick={() => changePage(index + 1)}>{index + 1}</button>
                            ))}
                           </div>
                            <button className={`${pageNumber === btns.length ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-500'} p-2 rounded-2xl`} disabled={pageNumber === btns.length ? true : false} onClick={() => setPageNumber(prev => prev + 1)}>Next</button>
                        </div>
                    </>
                )}  
            </div>
        </div>
    )
}

export default HomePage;

