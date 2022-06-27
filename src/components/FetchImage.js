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

  //change the value in labrador
  componentDidMount() {
    fetch(`https://dog.ceo/api/breed/wolfhound/images`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        images: data.message
      })
      console.log(data.message, 'images is called here based on breed in componentdidmount')

     });
  }

  render() {
 
    console.log(this.state.images, 'here is the object on line 30');

    const imageLink = this.showRandomBreed(this.state.images)

    console.log(imageLink)


    console.log(this.props.randomImage)
    return(
      <div className="image-card">
          <img src={imageLink} alt="Dog"></img>
      </div>
    )
  }
}

export default FetchImage