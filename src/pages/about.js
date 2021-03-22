import React, {useEffect, useRef} from "react";
import "./App.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

import imgGirl from "../assets/5.png";
import imgBoy from "../assets/2.png";


import LightSpeed from 'react-reveal/LightSpeed';


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
    <LightSpeed left>
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
			  <div className="hero-content-line">
        <div className="awa">
                  <div className="hero-content-line-inner">ABOUT US</div>
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className ="par">
                  <div className="hero-content-line-inner">Management Services is an ISO 9001:2015 certified professional services organization specializing in the business of Debt Management, Soft Collections, Credit Management, Document Collection, Domestic  Outbound Call Support, Seller Onboarding and CRMin Delhi/NCR.</div>
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">It was founded in 1998 by Mr. Sunil Diwan, who has prominent presence in the industry since 1992.</div>  
                </div>
               
              </h1>
			  <ul>
                    <li>We are one of the first agencies to get ISO certified </li>
                    <li>We have four facilities in Delhi/NCR to run operations </li>
					<li> Our Management Team is an amalgamation of highly experienced personnel in the arena of Debt/ Credit Management, and well qualified personnel with diverse experience in the industry</li>
					<li> We touch more than 125,000 customers every month</li>
					<li> Onboarded more than 5000 sellers for Snapdeal</li>
					<li>We perform more than 40,000 Physical Verifications, VAS and Document Collection every month across Delhi/NCR/Meerut/Hodal/Palwal </li>
					<li>We have one of the biggest collection set up in Delhi/NCR and are collecting more than Rs. 30 Crores every month </li>
					<li>Our pick up volumes cross 10,000 a month </li>
					<li> Management Services is time and again awarded for its performance and quality by our clients</li>
					
              </ul>
              
              
            </div>
          </div>
       
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
    </LightSpeed>
  );
}

export default App;
