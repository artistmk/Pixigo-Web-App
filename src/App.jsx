import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Saved from './components/Saved';
import axios from 'axios';
import { 
   BrowserRouter,
   Routes, 
   Route } from 'react-router-dom';

const App = () => {

  const API_KEY = "bjp7bhWSJ3VGaH8WOSPSzQgasVLWVGhykWcw3y4XFTJkcSUFH9HKyN38";

  const [images, setImages] = useState([])
  const [search, setSearch] = useState("nature")
  const [loader, setLoader] = useState(true)
  const [saved, setSaved] = useState([])

  useEffect(() => {

    const fetchImages = async () => {

      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {

          headers: { Authorization: API_KEY },
          params: { query: `${search}`, per_page: 80 },
        });

        setImages(response.data.photos); // Update state with images
        setLoader(false);

      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const data = JSON.parse(localStorage.getItem("Images"))
    if (data) {
      setSaved(data);
    }

    fetchImages();
  }, [search]);
 
  useEffect(() => {
     if(saved.length != 0) {
      const json = JSON.stringify(saved)
      localStorage.setItem("Images", json);
     }
  }, [saved])

  return (
    <BrowserRouter>

      <Navbar setSearch={setSearch}/>

      <Routes>

        <Route path="/" element={<Home images={images} loader={loader} saved={saved} setSaved={setSaved} />} />
        <Route path="/saved" element={<Saved saved={saved} loader={loader} />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;
