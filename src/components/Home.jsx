import React from 'react'
import Primary from './primary'
import Second from './Second'

const Home = () => {
  return (

      <div className='flex gap-2 mt-2 responsive flex-row justify-center items-center'>
      <Primary/>
      <Second/>
    </div>

  )
}

export default Home
