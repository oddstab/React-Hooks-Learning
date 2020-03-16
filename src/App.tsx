import React, { useState } from 'react';
import './App.css';
// import Context from './components/Context/Context';
// import LazyWithSuspense from './components/LazyWithSuspense/LazyWithSuspense'
import Memo from './components/Memo/Memo'
const App = () => {
  //useState只會執行一次
  const [count, setCount] = useState(() => {
    console.log("init");
    return 0;
  });
  console.log("render");
  return (
    <>

      {/* Context */}
      {/* <Context /> */}

      {/* 懶加載 */}
      {/* <LazyWithSuspense /> */}

      {/* 純粹組件 */}
      {/* <Memo /> */}
      {count}
      <button onClick={() => {
        setCount(count + 1)
      }}>add</button>
    </>
  )
}

export default App;
