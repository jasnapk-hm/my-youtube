import React from 'react'
import ButtonList from './ButtonList'
import VedioContainer from './VedioContainer'

const MainContainer = () => {
  return (
    <div className='p-2'>
      <h1>Main Container</h1>
      <ButtonList />
      <VedioContainer />
    </div>
  )
}

export default MainContainer
