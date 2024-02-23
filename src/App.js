import React from 'react'
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import PlanetsDetailsPage from './components/PlanetsDetailsPage';
import Opening from './components/Opening';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Opening/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/item/:id' element={<PlanetsDetailsPage/>}/>
      </Routes>
    </div>
  )
}

export default App


