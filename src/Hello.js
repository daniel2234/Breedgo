import React from "react"
import { fetchDogBreeds } from './utils/api';
import {fetchRandomDogImages} from './utils/api';
import FetchingButton from "./FetchingButton";
import FetchImage from "./components/FetchImage";

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      breeds: 'breeds',
      images: '',
      // error: null,
    }

    this.handleRequestAPI = this.handleRequestAPI.bind(this);
  }

  randomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 breedNames = (breeds) => {
    let names = []
    for (let index = 0; index < breeds.length; index++) {
      const element = breeds[index];
      names.push(element)
    }
    return names
  }

  handleRequestAPI() {
    console.log("this is called here");
    fetchRandomDogImages('affenpinscher')
    .then((images) => this.setState({
        images
    }))
  }

  componentDidMount() {
    fetchDogBreeds(this.state.breeds)
    .then((breeds) => this.setState({
      breeds: breeds
     }))
    // console.log(fetchDogBreeds(this.state.breeds))
    // console.log( fetchRandomDogImages('affenpinscher'))
  }

  render() {
    const randomImageIndex = this.randomIndex(0, this.state.images.length )
    const randomImage = this.state.images[randomImageIndex];
    const breed = this.breedNames(Object.keys(this.state.breeds))[0]
    


   return(
        <React.Fragment>
           <h1>Dogs</h1>
           <h4>{breed}</h4>
          <FetchImage onSelectBreed={breed} randomImage = {randomImage}/>
          <FetchingButton onClickHandler={this.handleRequestAPI}/>
        </React.Fragment>
   )
  }
}

export default Hello;