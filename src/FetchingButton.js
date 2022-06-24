import React from "react";
import './FetchingButton.css';

class FetchingButton extends React.Component {
  handleClick = () => {
    console.log('this is', this);
  };

  render() {
    return (
      <button className = "fetch-button" onClick={this.handleClick}>
        Fetch Me
      </button>
    )
  }
}

export default FetchingButton;
