
import React, { Suspense, useContext, useState } from 'react';

// const Dashboard = React.lazy(()=> import("./Dashboard"));
// const Landing = React.lazy(()=> import("./Landing"))

import Dashboard from "./Dashboard";
import Landing from "./Landing";
import './App.css'
import { CountContext } from './context';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './Nav';
import useTodos from './useTodos';

{/*function App() {



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

*/}


function App () {

  const todos = useTodos()
  console.log(todos);
  return (
    <div>{todos ? todos.forEach(todo => <Todo key={todo.id} title ={todo.todo}/>) : "No todos"}</div>
    
  )
}


function Todo({title}) {
  return (
    <div>{title } - {description}</div>
  )
}

export default App
