import React, { useState } from 'react'

const State = () => {
  const [count, setCount] = useState(() => {
    console.log("init");
    return 0;
  });

  console.log("render");
  return (
    <div>
      {count}
      <button onClick={() => {
        setCount(count + 1)
      }}
      >
        add
      </button>
    </div>
  )
}

export default State;