import React, { Component } from "react";
import Background from "./cyperpunk.gif"
var sectionStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${Background})`
};

class About extends Component {
  render() {
    if (!this.props.data) return null;

    
    const bio = this.props.data.bio;
    

    return (
      <section style={ sectionStyle } id="about">
        
          <div className="row">
            
            <div className="card">
              <h2>Sometime in the future...</h2>

              <p>{bio}</p>
            </div>
          </div>
       
      </section>
    );
  }
}

export default About;
