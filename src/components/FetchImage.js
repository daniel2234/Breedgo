import React from "react";

class FetchImage extends React.Component {


  render() {
    return(
      <div className="image-card">
          {/* utilize this.props.dogImage here  */}
          <img src={this.props.randomImage} alt="Avatar"></img>
      </div>
    )
  }
}

export default FetchImage