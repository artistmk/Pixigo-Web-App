import React from 'react'
import Loader from './Loader';

const Saved = ({saved, loader, setSaved}) => {

  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }

  return (
  <>
        <div className="container-fluid text-center my-4" id="top" style={myStyle}>
        
        {loader || saved.length === 0 ? (
           <>
          <Loader />
          <h1 className='related text-light'>No Image To Display :( - Please Save Some Images...</h1>
          </>
        ) : (
          <>
            <div className="flex" >

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
          <>
          <div className='container' style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "4rem"}}>

          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
          <button onClick={() => setSaved("")} className='btn btn-danger'>Clear Cart</button>
          </div>
          </>
        )}
      </div>
  </>
  )
}

export default Saved
