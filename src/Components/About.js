import React, { Component } from "react";
import Background from "./smoke.gif"
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
              

              <p>{bio}</p>
            </div>
          </div>
       
      </section>
    );
  }
}

export default About;
