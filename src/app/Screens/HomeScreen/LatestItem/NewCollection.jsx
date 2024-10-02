import React from "react";

// style
import "../HomeScreenCss/newCollection.css";

function NewCollection() {
  return (
    <>
      <div className="new-collection-main-container">
        <div className="new-collection-heading-div">
          <h4> Latest Collection </h4>
        </div>

        {/* filter  for search */}
        <div className="new-collection-sort-by-catogery-div">
          <div className="new-collection-filter-for-search">
            <h6>Sports</h6>
            <h6>Loafer</h6>
            <h6>Sleepers</h6>
            <h6>Sneakers</h6>
          </div>
        </div>

        {/* products sections */}

        <div className="new-collection-product-section">
          <div className="new-collection-product-details-section">
            <div className="product-image-div">
              <p> imagee</p>
            </div>
            <div className="product-name-div">
              <p> Nike Air Max 90 </p>
            </div>
            <div className="product-price-div">
              <p>
                {" "}
                <span> price 9000.0 </span> <span> price 99939 </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCollection;
