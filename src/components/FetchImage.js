import React from "react";

class FetchImage extends React.Component {


  render() {
    return(
      <div className="image-card">
          {/* utilize this.props.dogImage here  */}
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"></img>
      </div>
    )
  }
}

export default FetchImage