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

  handleRequestAPI() {
    console.log('this was clicked?')
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
    })
    
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
  
   return(
        <React.Fragment>
          <h1>BreedGO</h1>
          <div className="card">
            <div style={{marginTop: "50px"}}>
               <h3 style={{marginTop: "50px"}}>{randomBreed.charAt(0).toUpperCase() + randomBreed.slice(1)}</h3>
            </div>

            <img src={breedImages} className="image-doggo" alt="Dog"></img>
            <FetchingButton onClickHandler={this.handleRequestAPI}/>
          </div>
        </React.Fragment>
   )
  }
}

export default Hello;