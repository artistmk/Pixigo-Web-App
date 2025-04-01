import React from "react";
import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ images, loader, saved, setSaved }) => {

  const saveImage = (img) => {
    let flag = true;
   
    if (saved !== null && saved.length > 0) {

      for(let i=0; i<saved.length; i++) {
        
        if (saved[i].id === img.id) {
          flag = false;
          
          toast.info('Image Already Saved!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });

          break;
        } 
      }
    }
   
     if (flag) {
        setSaved([...saved, img]);
        
        toast.success('Image Saved!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
  
  };

  return (
    <>
    <ToastContainer />

      <div className="container-fluid text-center my-4" id="top">
        
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {images.map((image) => {

                return (
                  <div key={image.id} className="items" onClick={() => saveImage(image)} >
                    <img src={image.src.medium} alt={image.photographer} />
                  </div>
                );
              })}
            </div>
          </>
        )}

        {images.length != 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a> 
        )}
      </div>
    </>
  );
};

export default Home;
