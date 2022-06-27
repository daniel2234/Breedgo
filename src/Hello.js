import React from "react"
// import { fetchDogBreeds } from './utils/api';
// import {fetchRandomDogImages} from './utils/api';
import FetchingButton from "./FetchingButton";
import FetchImage from "./components/FetchImage";

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      breeds: [],
    }

    // this.handleRequestAPI = this.handleRequestAPI.bind(this);
  }

  showRandomBreed(breeds) {
    let randomElement = Object.keys(breeds)[Math.floor(Math.random()* Object.keys(breeds).length)]
    return randomElement;
  }


 fetchRandomDogImages(type='affenpinscher') {
  return fetch(`https://dog.ceo/api/breed/${type}/images`)
    .then(response => response.json())
    .then(data => {
      return data.message
  });
}
  componentDidMount() {
    fetch(`https://dog.ceo/api/breeds/list/all`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          breeds: data.message
        })
      });
  }

  render() {
  let randomBreed = this.showRandomBreed(this.state.breeds)

   return(
        <React.Fragment>
           <h1>Dogs</h1>
           <h2>Number of Breeds</h2>
            <h3>{randomBreed}</h3> 
            {/* <img src={} alt="Dog"></img> */}
            {/* <h3>{randomImageName}</h3> */}
           {/* <h4>{breed}</h4> */}
          <FetchImage randomImage = {randomBreed}/>
          {/* <FetchingButton onClickHandler={this.handleRequestAPI()}/> */}
        </React.Fragment>
   )
  }
}

export default Hello;