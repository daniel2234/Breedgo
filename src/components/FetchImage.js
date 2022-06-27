import React from "react";
import { fetchRandomDogImages } from "../utils/api";
// import './FetchImage.css'

class FetchImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images : ''
    }
  }

  showRandomBreed(breeds) {
    let randomElement = breeds[Math.floor(Math.random()* Object.keys(breeds).length)]
    return randomElement;
  }


  render() {
    
    console.log('')
    return(
      <div className="image-card">
          <img src={this.state.images} alt="Dog"></img>
      </div>
    )
  }
}

export default FetchImage