import React, { memo } from 'react'

//在react-devTool會顯示Anonymous
//可以改成memo(function Foo(){...})
const Foo = memo((props) => {
  console.log('render');
  return (
    <div>
      Foo
    </div>
  )
})

export default Foo;