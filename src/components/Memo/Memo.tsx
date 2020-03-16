import React, { useState } from 'react'
import Foo from './Foo'

const Memo = () => {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        onClick={handleAdd}
      >
          add
      </button>
      <Foo />
      {count}
    </div>
  )
}

export default Memo;
