
import React, { Suspense, useContext, useState } from 'react';

// const Dashboard = React.lazy(()=> import("./Dashboard"));
// const Landing = React.lazy(()=> import("./Landing"))

import Dashboard from "./Dashboard";
import Landing from "./Landing";
import './App.css'
import { CountContext } from './context';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './Nav';

function App() {



  return (
    <BrowserRouter>
      <CountContext.Provider value={0} >
        <Routes>
          <Route path='/' element={<Suspense fallback={"loading...."}><Nav/></Suspense>}> 
            <Route index element={<Suspense fallback={"loading...."}><Landing/></Suspense>}/>
            <Route path='/dashboard' element={<Suspense fallback={"loading...."}><Dashboard/></Suspense>}/>
          </Route>
          
        </Routes>
      </CountContext.Provider>
    </BrowserRouter>
  )
}






export default App
