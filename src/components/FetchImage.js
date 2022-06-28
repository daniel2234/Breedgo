import React, { useEffect, useState } from "react";
import { fetchRandomDogImages } from "../utils/api";
// import './FetchImage.css'


const FetchImage = (props) => {
  const [images, setImages] = useState({});

  async function fetchData() {
    const res = await fetch(`https://dog.ceo/api/breed/${props.randomImage}/images`)
    res.json()
    .then(res => setImages(res))
  }

  useEffect(() => {
    fetchData();
  })

  function makeArray(obj) {}


  return (
    <div>
      <span>{JSON.stringify(images.message)}</span>
    </div>
  )


}

export default FetchImage