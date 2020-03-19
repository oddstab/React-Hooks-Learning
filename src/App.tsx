import React from 'react';
import './App.css';
import TodoList from './components/WithoutRedux/TodoList';
// import Effect from './components/Effect/Effect';
// import CustomHooks from './components/CustomHooks';
// import Context from './components/Context/Context';
// import LazyWithSuspense from './components/LazyWithSuspense/LazyWithSuspense'
// import Memo from './components/Memo/Memo'
// import State from './components/State/'

const App = () => {
  //useState只會執行一次
  return (
    <>

      {/* Context */}
      {/* <Context /> */}

      {/* 懶加載 */}
      {/* <LazyWithSuspense /> */}

      {/* 純粹組件 */}
      {/* <Memo /> */}

      {/* useState */}
      {/* <State /> */}

      {/* useEffect */}
      {/* <Effect /> */}

      {/* 自定義Hooks */}
      {/* <CustomHooks /> */}

      {/* 自己做Redux */}
      <TodoList />
    </>
  )
}

export default App;
