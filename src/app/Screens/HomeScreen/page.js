import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MainView from './MainContainer/MainView'
import NewCollection from './LatestItem/NewCollection'
import TopCatogeries from './catogeries/TopCatogeries'

function page() {
  return (
    <>
    <Navbar />
    <MainView />
    <NewCollection />
    <TopCatogeries />
       Home page
    <Footer />
    </>
  )
}

export default page