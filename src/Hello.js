import React from "react"
// import { fetchDogBreeds } from './utils/api';
import {fetchRandomDogImages} from './utils/api';
import FetchingButton from "./FetchingButton";
import FetchImage from "./components/FetchImage";

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedBreed: 'breeds',
      image: null,
      error: null,
    }

    this.handleRequestAPI = this.handleRequestAPI.bind(this);
  }

  handleRequestAPI() {
    console.log("this is called here");
    console.log( fetchRandomDogImages('affenpinscher'));
  }

  

  componentDidMount() {
    // console.log(fetchDogBreeds(this.state.selectedBreed))
    // console.log( fetchRandomDogImages('affenpinscher'))
  }

  render() {
   return(
        <React.Fragment>
           <h1>Dogs</h1>
          <FetchImage/>
          <FetchingButton onClickHandler={this.handleRequestAPI}/>
        </React.Fragment>
   )
  }
}

export default Hello;