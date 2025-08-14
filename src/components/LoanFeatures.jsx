import React from "react";
import { FaMoneyCheckAlt, FaPiggyBank, FaHandHoldingUsd, FaBolt, FaRegChartBar, FaUserShield, FaSmile } from "react-icons/fa";
import "./LoanFeatures.css";

const LoanFeatures = () => {
  const loanPoints = [
    {
      icon: <FaMoneyCheckAlt />,
      title: "Quick Disbursement",
      description: "Get your loan amount disbursed within hours.",
    },
    {
      icon: <FaPiggyBank />,
      title: "No Collateral",
      description: "We offer loans without requiring any security.",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Flexible Amounts",
      description: "Choose loan amounts that suit your needs.",
    },
    {
      icon: <FaBolt />,
      title: "Instant Approval",
      description: "Enjoy fast approvals with minimal documentation.",
    },
    {
      icon: <FaRegChartBar />,
      title: "Affordable Rates",
      description: "Low-interest rates tailored to your requirements.",
    },
    {
      icon: <FaUserShield />,
      title: "Secure Process",
      description: "Your personal and financial data is fully secured.",
    },
    {
      icon: <FaSmile />,
      title: "Customer Support",
      description: "24/7 assistance for all your queries and needs.",
    },
  ];

  return (
    <div className="loan-features-container">
      <h1 className="features-header">Personal Loan Features</h1>
      <div className="scrolling-cards">
        <div className="cards-wrapper">
          {loanPoints.map((point, index) => (
            <div className={`loan-card ${index === Math.floor(loanPoints.length / 2) ? "center-card" : ""}`} key={index}>
              <div className="icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
          {/* Duplicate for looping */}
          {loanPoints.map((point, index) => (
            <div className={`loan-card ${index === Math.floor(loanPoints.length / 2) ? "center-card" : ""} duplicate`} key={`duplicate-${index}`}>
              <div className="icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanFeatures;
