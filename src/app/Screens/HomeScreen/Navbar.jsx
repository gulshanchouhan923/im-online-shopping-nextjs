import React from 'react'


import "bootstrap/dist/css/bootstrap.min.css"
import './HomeScreenCss/navbar.css';
import Head from 'next/head';
import Image from 'next/image';


// images and other stuff

import LogoImage from '../../images/output-onlinepngtools-removebg-preview.png'

// icons
import { BsBagHeart } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";

function Navbar() {
  return (
    <>

      <Head  >
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />

      </Head>


{/* top-offer-section */}
     <div className="nav-bar-top-offer-section-main-div">
         <div className="offer-section-details-div">
             <p>  * Create an Account !! get one slide free off cost on first order * </p>
         </div>
     </div>
{/* top-offer-section */}

      <div className="nav-bar-main-container">
        <div className="container  nav-bar-container">
          <div className="row   nav-bar-row-section">



            {/* second row */}
            <div className="col-4  second-row-container">

                <div className="second-row-container-main-icon">
                <TfiMenu />
                </div>
              {/* <ul>
                <li>
                  sports
                </li>

                <li>
                  sports
                </li>

                <li>
                  sports
                </li>

                <li>
                  sports
                </li>
              </ul> */}
            </div>


            {/* middel section of header */}

            <div className="col-4 first-row-logo-container">
              <div>
                <Image src={LogoImage} alt='im-main-logo' />
              </div>

            </div>

            {/* middel section of header */}

            <div className="col-4 nav-bar-third-row">
              <div className="nav-bar-search-section">
                <div className='nav-bar-search-icon-div'>
                  <IoSearch />
                </div>
                <div>
                  <input type='text' placeholder='Search' />
                </div>

              </div>
              <div className='nav-bar-cart-icons-div'>
                <BsCart4 />
              </div>
              <div className='nav-bar-heart-icons-div'>
                <BsBagHeart />
              </div>
              {/* <div>
                user
              </div> */}

            </div>

          </div>

        </div>




      </div>

    </>
  )
}

export default Navbar