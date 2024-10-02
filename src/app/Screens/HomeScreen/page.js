import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MainView from './MainContainer/MainView'
import NewCollection from './LatestItem/NewCollection'

function page() {
  return (
    <>
    <Navbar />
    <MainView />
    <NewCollection />
       Home page
    <Footer />
    </>
  )
}

export default page