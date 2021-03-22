import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "DEBT MANAGEMENT",
    title: "Reduce net credit losses and delinquencies across industries and products.",
    img: "1"
  },
  {
    id: 2,
    subtitle: "CREDIT MANAGEMENT",
    title: "Analyze the credit worthiness of your potential customers.",
    img: "2"
  },
  {
    id: 3,
    subtitle: "DOCUMENT COLLECTION",
    title: "Tele-calling & Field support services to clients for Document Collection.",
    img: "3"
  },
  {
    id: 4,
    subtitle: "CUSTOMER SERVICES",
    title: "Tele-calling and Field support for flows collection, value added services, and more.",
    img: "4"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
