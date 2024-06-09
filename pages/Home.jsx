import React from 'react'
import Header from '../components/Header'
import RecommendedFood from '../components/RecommendedFood'
import Service from '../components/Service'
import NewFoods from '../components/NewFoods'
import Service2 from '../components/Service2'
import Special from '../components/Special'

const Home = () => {
  return (
    <div>
        <Header />
        <RecommendedFood />
        <Service />
        <NewFoods />
        <Service2 />
        <Special />
    </div>
  )
}

export default Home