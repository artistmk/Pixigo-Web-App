import React from 'react'
import Loader from './Loader';

const Saved = ({saved, loader}) => {
  return (
  <>
        <div className="container-fluid text-center my-4" id="top">
        
        {loader || saved.length === 0 ? (
           <>
          <Loader />
          <h1 className='related text-light'>No Image To Display :( - Please Save Some Images...</h1>
          </>
        ) : (
          <>
            <div className="flex">

              {saved.map((image) => {

                return (
                  <div key={image.id} className="items" onClick={() => saveImage(image)} >
                    <img src={image.src.medium} alt={image.photographer} />
                  </div>
                );
              })}
            </div>
          </>
        )}

        {saved.length != 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
        )}
      </div>
  </>
  )
}

export default Saved
