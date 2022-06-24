import React from "react";
import { fetchRandomDogImages } from "../utils/api";
// import './FetchImage.css'

class FetchImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image : ''
    }
  }




  render() {

    return(
      <div className="image-card">
          <img src={this.props.randomImage} alt="Dog"></img>
      </div>
    )
  }
}

export default FetchImage