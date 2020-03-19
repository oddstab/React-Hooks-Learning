import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [count, setCount] = useState(0)
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  useEffect(() => {
    console.log('標題被更改成', count, '了');
    document.title = String(count);
  }, [count])

  useEffect(() => {
    console.log('window綁定resize');
    window.addEventListener("resize", onResize, false);
    return () => {
      console.log('window刪除resize');
      window.removeEventListener("resize", onResize, false);
    }
  }, []);

  useEffect(() => {
    //綁定事件
    document.getElementById("size")?.addEventListener("click", click)
    return () => {
      console.log('click銷毀');
      document.getElementById("size")?.removeEventListener("click", click);
    }
  });

  const click = () => {
    console.log('click');
  }

  //按鈕方法
  const handleClick = () => {
    setCount(count + 1);
  }

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }

  return (
    <div>
      count:{count} <br />
      size:({size.width},{size.height})
      <button onClick={handleClick}>
        按我+1
      </button>
      {
        count % 2 ?
          <span id="size">[span],[width:{size.width},height:{size.height}]</span>
          :
          <p id="size">[span],[width:{size.width},height:{size.height}]</p>
      }
    </div>
  );
}

export default Effect;