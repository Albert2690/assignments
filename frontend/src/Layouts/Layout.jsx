import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Routerr from '../Routes/Router'

function Layout() {
  return (
    <>
    <Header />
    <main>
        <Routerr />
    </main>
    <Footer/>
    
    </>
   
  )
}

export default Layout