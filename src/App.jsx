
// import React, { Suspense, useContext, useState } from 'react';

// const Dashboard = React.lazy(()=> import("./Dashboard"));
// const Landing = React.lazy(()=> import("./Landing"))

// import Dashboard from "./Dashboard";
// import Landing from "./Landing";
import './App.css'
// import { CountContext } from './context';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Nav from './Nav';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/count';

function App() {



  return (
    <RecoilRoot>
      <div>
        <Count />
      </div>
    </RecoilRoot>
  )
}

function Count() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <div>Count:{count} </div>
      <Button />
      {(count % 2 ==0) && <p>It is even</p>}
    </div>
  )
}

function Button() {
  const setCount = useSetRecoilState(counterAtom);

  const handleIncrement = ()=> {
    setCount(count => count+1)
  }

  const handleDecrement = ()=> {
    setCount(count => count -1)
  }

  return (
    <div> 
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}





export default App
