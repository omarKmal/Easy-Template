// import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStyled from "./Containers/GlobalStyled";
import Home from "./Containers/Home";
import alldata from "./data";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresData, setFeaturesData] = useState([]);
  const [error, setError] = useState(false);
  const [lodaing, setLodaing] = useState(true);
  const [sliderData, setSliderData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [blogData, setBlogData] = useState([]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setFeaturesData(alldata[0].features);
    setSliderData(alldata[1].slider);
    setPriceData(alldata[2].price);
    setBlogData(alldata[3].blog);
    setLodaing(false);
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:9000/alldata")
  //     .then((res) => {
  //       setFeaturesData(res.data[0].features)
  //       setSliderData(res.data[1].slider)
  //       setPriceData(res.data[2].price)
  //       setBlogData(res.data[3].blog)
  //       setLodaing(false)
  //     })
  //     .catch((err) => {
  //       setError(`Some Thing Wrong ${err}`)
  //       setLodaing(false)
  //     })
  // }, [])
  return (
    <>
      <GlobalStyled />
      <Home
        sliderData={sliderData}
        featuresData={featuresData}
        lodaing={lodaing}
        error={error}
        isOpen={isOpen}
        handleOpen={handleOpen}
        priceData={priceData}
        blogData={blogData}
      />
    </>
  );
}

export default App;
