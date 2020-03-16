import React, { lazy, Suspense } from 'react'

//懶加載
//使用 /* webpackChunkName: "about" */ 可以自訂chunk名稱
const About = lazy(() => import(/* webpackChunkName: "about" */"./About"));

const LazyWithSuspense = () => {
  return (
    <div>
      {/* fallback裡面要放一個jsx */}
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  )
}

export default LazyWithSuspense;