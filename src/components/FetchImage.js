import React, { useEffect, useState } from "react";
import { fetchRandomDogImages } from "../utils/api";
// import './FetchImage.css'


const FetchImage = (props) => {
  const [images, setImages] = useState({});

  async function fetchData() {
    const res = await fetch(`https://dog.ceo/api/breed/${props.randomImage}/images`)
    res.json()
    .then(res => setImages(res.message))
  }

  useEffect(() => {
    fetchData();
  })

  // function get_random (list) {
  //   return list[Math.floor((Math.random()*list.length))];
  // }
  
  // const objImage = makeArray(images);
  const message = JSON.stringify(images)
  // console.log(message)
  const data = JSON.parse(message)



  return (
    <div>
      <span>{message.map()}</span>
    </div>
  )


}

export default FetchImage