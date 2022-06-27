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

  //pass in value of api for image retrieval.
  componentDidMount() {
    fetch(`https://dog.ceo/api/breed/${this.props.randomImage}/images`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        images: this.showRandomBreed(data.message)
      })
      console.log(this.showRandomBreed(data.message), 'images is called here based on breed in componentdidmount')
     });
  }

  render() {
    

    return(
      <div className="image-card">
          <img src={this.state.images} alt="Dog"></img>
      </div>
    )
  }
}

export default FetchImage