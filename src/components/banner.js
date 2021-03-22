import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Management Services is an ISO 9001:2015 certified
professional services organization. Specializing in the
business of  </span>
            </div>
            <div className='line'>
              <span>Debt Management, Soft Collections,
Credit Management, Document Collection, Domestic
Outbound Call Support, Seller Onboarding and CRM
in Delhi/NCR.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              LEARN MORE  <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
