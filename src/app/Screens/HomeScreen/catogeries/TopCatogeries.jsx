import Image from 'next/image'
import React from 'react'



// import style 

import '../HomeScreenCss/topCatogery.css'



import catogeryImages1 from '../../../images/FJ3145_002_P1.jpeg'


function TopCatogeries() {
  return (
    <>
      <div className="top-catogery-main-container">

                  <div className="top-catogery-main-heading-div">
                      <div className="top-catogery-heading">
                        <h5>  Shop by Catogery   </h5>
                      </div>
                  </div>

                    {/* product section */}

                    <div className="top-catogery-product-main-div">
                    <div className="top-catogery-product-div">
                          
                          <div className="top-catogery-product-image-div">
                            <div>
                            <Image src={catogeryImages1}  alt='nike-sneakers' />
                            </div>
                          </div>
                          <div className="top-catogery-product-name">
                             <p> Sports</p>
                          </div>
                    </div>

                    {/* second */}

                    <div className="top-catogery-product-div">
                          
                          <div className="top-catogery-product-image-div">
                            <div>
                            <Image src={catogeryImages1}  alt='nike-sneakers' />
                            </div>
                          </div>
                          <div className="top-catogery-product-name">
                             <p>  2 Sports</p>
                          </div>
                    </div>

                    {/* third */}

                    <div className="top-catogery-product-div">
                          
                          <div className="top-catogery-product-image-div">
                            <div>
                            <Image src={catogeryImages1}  alt='nike-sneakers' />
                            </div>
                          </div>
                          <div className="top-catogery-product-name">
                             <p> 3 Sports</p>
                          </div>
                    </div>
                    </div>
                
      </div>

    
    </>
  )
}

export default TopCatogeries