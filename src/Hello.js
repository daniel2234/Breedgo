import React from "react"
// import { fetchDogBreeds } from './utils/api';
import {fetchRandomDogImages} from './utils/api';
import FetchingButton from "./FetchingButton";
import './Hello.css';
// import FetchImage from "./components/FetchImage";

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      breeds: {},
      randomBreed: '',
      breedImages: '',
      isLoaded: false,
      error: null,
    };

    this.handleRequestAPI = this.handleRequestAPI.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  showRandomBreed(breeds) {
    console.log('showRandomBreed');
    let randomElement = Object.keys(breeds)[Math.floor(Math.random()* Object.keys(breeds).length)]
    return randomElement;
  }


  randomPhoto(images) {
    console.log('images');
    let random = images[Math.random() * images.length>>0];
    console.log(random);
    return random;
  }

  // handleClick() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

  handleRequestAPI() {

  }

  componentDidMount() {
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(response => response.json())
    .then(data => {
      const showBreed = this.showRandomBreed(data.message)
      console.log(showBreed, 'line 38')
      this.setState({
        isLoaded: true,
        breeds: data.message,
        randomBreed: showBreed
      });
        fetch(`https://dog.ceo/api/breed/${showBreed}/images`)
        .then(response => response.json())
        .then(data => {
          const breedImage = this.randomPhoto(data.message);
          this.setState({
            breedImages: breedImage
          })
        })
      },
    (error)=> {
      this.setState({
        isLoaded: true,
        error
      });
     }
    )

  }



  render() {
    let { randomBreed, breedImages } = this.state
    // const showBreed = this.showRandomBreed(breeds)
    console.log(this.state.breeds, 'line 64')
    console.log(this.state.breedImages, 'line 78')
  
   return(
        <React.Fragment>
          <h1>Dogs</h1>
          <div className="card">
            <h3>{randomBreed}</h3>
            <img src={breedImages} className="image-doggo" alt="Dog"></img>
            <FetchingButton onClickHandler={this.handleRequestAPI()}/>
          </div>
        </React.Fragment>
   )
  }
}

export default Hello;