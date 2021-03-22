import React, {useEffect, useRef} from "react";
import "./App.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import Slide from 'react-reveal/Slide';

import imgBoy from "../assets/2.png";


function App() {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});
  
  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Images Animation
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(boyImage, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])



  return (
     <div className ="appro">
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
			  <div className="hero-content-line">
                  <div className="hero-content-line-inner"> </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner"></div>
                </div>
                <div className="hero-content-line">
                  <div className="awa">
                  <Slide left >
                  <div className="hero-content-line-inner">AWARDS AND ACCOLADES</div>  
                  </Slide>
                  </div>
                </div>
               
              </h1>
              
              <ul>
          <li>July 2017 to September 2017- Best Verification Agency for Vodafone</li>
          <li>January 2017 to March 2017- Best Verification Agency for Vodafone</li>
					<li> April 2016: Collection Pace++ Award for SBI Card </li>
					<li> January 2016-March 2016: Best Verification Agency for Vodafone</li>
					<li> H1 2014-2015: Best Verification Agency for Vodafone</li>
					<li>April 2014 – September 2014: Best Verification Agency for Vodafone</li>
					<li>November – December 2013: Best Verification Agency for Vodafone</li>
					<li>May 2013: Best Verification Agency for Vodafone </li>
					<li>March 2013: Best Verification Agency for Vodafone</li>
          <li>January 2013: Best Verification Agency for Vodafone </li>                
					<li> December 2012: Best Verification Agency for Vodafone</li>
					<li> March 2012: Best Verification Agency for Vodafone</li>
					<li> September – October 2011: Best Verification Agency for Vodafone</li>
					<li>July 2011: Best Verification Agency for Vodafone</li>
					<li>2010-2011: Best Northern Collection Nawab, Credit Card for GE SBI</li>
					<li>December 2010: Best Verification Agency for Vodafone</li>
					<li> July – October 2010: Best Verification Agency for Vodafone</li>
          <li> March 2010: Best Verification Agency for Vodafone</li>
          <li>March 2009: Best Write-Off Collections, ICICI Bank </li>
              </ul>
              
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image girl">
                <img src="http://www.managementser.com/wp-content/uploads/iso-certified.png" alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default App;
