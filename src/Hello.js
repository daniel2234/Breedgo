import React from "react"
import { fetchDogBreeds } from './utils/api';

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedBreed: 'breeds',
    }
  }

  

  componentDidMount() {
    console.log(fetchDogBreeds(this.state.selectedBreed))
  }

  render() {
   return(
        <React.Fragment>
           <h1>Dogs</h1>
        </React.Fragment>
   )
  }
}

export default Hello;