import React from "react"
import { fetchDogBreeds } from './utils/api';

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedBreed: 'breeds'
    }
  }

  componentDidMount() {
    console.log(fetchDogBreeds())
  }

  render() {
   

    return  <div>
  
       
    </div> 
  }
}

export default Hello;