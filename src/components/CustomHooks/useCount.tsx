import { useState, useRef, useEffect } from 'react'

const useCount = (defaultCount: number) => {
  const [count, setCount] = useState(defaultCount);
  const it = useRef<NodeJS.Timeout | null>();

  useEffect(() => {
    it.current = setInterval(() => {
      //傳進上一次的參數
      setCount(count => count + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    const second = 10;
    if (count >= second) {
      console.log(`${second}秒到了`);

      //ts的setInterval有坑，需要轉成number才能使用clearInterval !
      clearInterval(Number(it.current));
    }
  });

  return [count, setCount];
}

export default useCount;