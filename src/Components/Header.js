import React, { Component } from "react";
import Background from "./bg.jpg"
var sectionStyle = {
  
  backgroundImage: `url(${Background})`
};
class Header extends Component {
  render() {
    if (!this.props.data) return null;

  

    return (
      <section id="bg" style={ sectionStyle }>
      <header id="home">
         
         

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            

            <li>
              <a className="smoothscroll" href="#roadmap">
                Roadmap
              </a>
            </li>

            <li>
            <a className="smoothscroll" href="#whitepaper">
              Whitepaper
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#team">
                Team
              </a>
            </li>
          </ul>
        </nav>

        
          
            
         
            
          

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        
      </header>
      </section>
    );
  }
}

export default Header;
