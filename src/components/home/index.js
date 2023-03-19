import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../banner/index'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate({replace: true})
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Banner />
    </>
  )
}

export default Home