import React from 'react'
import useCount from './useCount'

const CustomHooks = () => {
  const [count, setCount] = useCount(0);

  const resetCount = () => {
    console.log(setCount);
  }

  return (
    <>
      count:{count}
      <button onClick={resetCount}>重置秒數</button>
    </>
  )
}

export default CustomHooks;