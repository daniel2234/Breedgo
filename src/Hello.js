import React from "react"
// import { fetchDogBreeds } from './utils/api';
import {fetchRandomDogImages} from './utils/api';
import FetchingButton from "./FetchingButton";
import FetchImage from "./components/FetchImage";

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      breeds: {},
      isLoaded: false,
      error: null,

    };

    // this.handleRequestAPI = this.handleRequestAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showRandomBreed(breeds) {
    let randomElement = Object.keys(breeds)[Math.floor(Math.random()* Object.keys(breeds).length)]
    return randomElement;
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  componentDidMount() {
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        isLoaded: true,
        breeds: data.message
      });
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
    let { breeds, isLoaded, error } = this.state
    const showBreed =this.showRandomBreed(breeds)

   return(
        <React.Fragment>
           <h1>Dogs</h1>
           <h2>Number of Breeds</h2>
           <h3>{showBreed}</h3>
           <h4>Dog length: {typeof fetchBreedImages}</h4>
           {/* <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON': 'OFF'}
            </button> */}
            <ul>
              {/* {Object.values(fetchBreedImages).map((breed, i) => (
                  <li key={breed}>{breeds[i]}</li>
              ))} */}
            </ul>


            {/* <h3>{randomBreed}</h3>  */}
            {/* <img src={} alt="Dog"></img> */}
            {/* <h3>{randomImageName}</h3> */}
           {/* <h4>{breed}</h4> */}
          {/* <FetchImage randomImage = {randomBreed}/> */}
          {/* <FetchingButton onClickHandler={this.handleRequestAPI()}/> */}
        </React.Fragment>
   )
  }
}

export default Hello;