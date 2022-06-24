import React from "react"
// import { fetchDogBreeds } from './utils/api';
import {fetchRandomDogImages} from './utils/api';
import FetchingButton from "./FetchingButton";
import FetchImage from "./components/FetchImage";

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // selectedBreed: 'breeds',
      images: 0,
      // error: null,
    }

    this.handleRequestAPI = this.handleRequestAPI.bind(this);
  }

  randomPhoto = (min, max) => {
    console.log( Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  handleRequestAPI() {
    console.log("this is called here");
    fetchRandomDogImages('hound')
    .then((images) => this.setState({
        images
    }))
  }

  componentDidMount() {
    // console.log(fetchDogBreeds(this.state.selectedBreed))
    // console.log( fetchRandomDogImages('affenpinscher'))
  }

  render() {
    const randomImageIndex = this.randomPhoto(0, this.state.images.length )
    const randomImage = this.state.images[randomImageIndex];
   return(
        <React.Fragment>
           <h1>Dogs</h1>
          <FetchImage randomImage = {randomImage}/>
          <FetchingButton onClickHandler={this.handleRequestAPI}/>
        </React.Fragment>
   )
  }
}

export default Hello;