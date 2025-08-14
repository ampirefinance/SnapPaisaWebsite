import React, { useState } from "react";
import Banner from "../components/Banner";
import { motion } from "framer-motion";
import './Home.css'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { VscCombine } from "react-icons/vsc";
import features_img from "../images/features_img.png";
import process_line from "../images/process_line.svg";
import bg_shape from "../images/service_grid_bg.png";
import Number_Statistics from "../components/Number_Statistics";
import { AiOutlineFileDone } from "react-icons/ai";
import { VscOpenPreview } from "react-icons/vsc";
import { IoMdDoneAll } from "react-icons/io";
import LoanCalculator from "../components/LoanCalculator";
import ChatButton from "../components/ChatButton";
import underlay_img from "../images/get_started_underlay.jpg";
import overlay_img from "../images/get_started_overlay.jpg";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { BiSolidCustomize } from "react-icons/bi";
import { SiFsecure } from "react-icons/si";
import { FaStrava } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import {
  MdOutlineFileDownload,
  MdOutlineFileUpload,
  MdOutlineDone,
} from "react-icons/md";
import step_2_img from "../images/step_2.png";
import step_3_img from "../images/step_3.png";
import Process from "../components/Process";
import Calculator from "../components/Calculator";
import WhyChoose from "../components/WhyChoose";
import LoanPart from "../pages/LoanPart";
import LoanProcessDiagram from "../pages/LoanProcessDiagram";
import LoanEligibility from "../pages/LoanEligibility";
import LoanCalculate from "./LoanCalculator";
import SortFAQ from "../pages/SortFAQ"
import Bodyimage from "../images/body-new.png";
import HomePageBanner from "../images/HomePageBanner.png";
import HomePageBanner2 from "../images/HomePageBanner2.png";
import HomeBody1Image from "../images/HomeBody1.png";
import TestingImage from "../images/testing.jpg";
import BackgroundRemover from "../components/BackgroundRemover";
import AdvancedBackgroundRemover from "../components/AdvancedBackgroundRemover";
import ImageWithTransparentBg from "../components/ImageWithTransparentBg";
import AnimatedText from '../components/AnimatedText'
import LoanFeatures from "../components/LoanFeatures";
import Testimonial from '../components/Testimonial'
import { APP_NAME } from "../Utils/constant";
import InterestCalculator from "../components/InterestCalculator/Intrestcalculator";

const Home = () => {
  const [step, setStep] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  // Debug: Log the image import
  console.log('HomeBody1Image:', HomeBody1Image);
  console.log('HomePageBanner2:', HomePageBanner2);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const advantages = [
    {
      title: "Easy Application",
      content: `Gone are the days when the loan application process was itself a headache. Now, you need not visit a bank and sign a bundle of documents because we allow online paperless loan applications with minimum documentation. Don't stand in the long queue at your nearest bank, instead open the ${APP_NAME} app and complete the application process in the blink of an eye.`
    },
    {
      title: "Prompt Approval",
      content: `As soon as we receive a loan application, we immediately swing into action. We meticulously review the loan application and if everything is good to go, we instantly approve it in a flash. ${APP_NAME} understands how important your time is, which is why we believe in prompt approval and super-fast bank transfers.`
    },
    {
      title: "Ultrafast Loan Disbursal",
      content: `The reason why ${APP_NAME} has made a special name for itself is its ultrafast loan disbursal feature. We are as fast as a lightning bolt in transferring the loan amount directly to your bank account. Once the loan is approved by our team, we waste no time in disbursing the amount.`
    },
    {
      title: "No Hidden Charges",
      content: `Hidden charges may come as a shock, making you sceptical about whether to take the loan or not. At ${APP_NAME}, we aim to simplify your financial complications with our 'No Hidden Charges' policy that makes things transparent.`
    },
    {
      title: "Easy-to-Repay Options",
      content: "We want to be the helping hand in your lean patch. Therefore, customer satisfaction is at the top of our priority list. We offer personalized loan terms and flexible repayment options to ensure that repaying the loan amount never feels like a burden."
    },
    {
      title: "Customized Personal Loans",
      content: "We know that circumstances may differ from person to person. Therefore, loan requirements may significantly vary. Keeping this in mind, we offer a wide range of loan options to fit every loan requirement."
    }
  ];
  
  return (
    <>
      <div className="page_wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Secure Your <span className="highlight">Instant Loan</span> Within Minutes
              </motion.h1>
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Quick, safe, and convenient instant loans. 
                Submit your application online and receive immediate approval with simple paperwork.
              </motion.p>
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button 
                  className="btn-primary"
                  onClick={() => window.location.href = "/apply-now"}
                >
                  Start Application
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => window.location.href = "/about-us"}
                >
                  Discover More
                </button>
              </motion.div>
            </div>
            <div className="hero-image">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <AdvancedBackgroundRemover 
                  src={HomePageBanner} 
                  alt="Snap Paisa Personal Loans"
                  className="hero-image-processed"
                  method="auto"
              />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Body Banner Section */}
        {/* <section className="body-banner-section">
          <div className="body-banner-container">
            <div className="body-banner-content">
            <motion.h2 
                className="body-banner-title"
                initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                Experience <span className="highlight">Seamless</span> Loan Services
            </motion.h2>
              <motion.p 
                className="body-banner-subtitle"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our advanced technology ensures quick processing and secure transactions. 
                Get the financial support you need with our reliable lending solutions.
              </motion.p>
                <motion.div 
                className="body-banner-buttons"
                initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                <button 
                  className="btn-primary"
                  onClick={() => window.location.href = "/apply-now"}
                >
                  Get Started
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => window.location.href = "/about-us"}
                >
                  Learn More
                </button>
              </motion.div>
            </div>
            <div className="body-banner-image">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <AdvancedBackgroundRemover 
                  src={HomePageBanner2} 
                  alt="Snap Paisa Loan Services"
                  className="body-banner-image-processed"
                  method="auto"
                />
                </motion.div>
            </div>
          </div>
        </section> */}
        {/* Statistics Banner Section */}
        <section className="stats-banner-section">
          <div className="stats-banner-container">
            <motion.div 
              className="stats-banner-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="stats-banner-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                POWERING INSTANT LOANS WITH SCALABLE FINANCIAL SOLUTIONS
              </motion.h2>
              
              <motion.p 
                className="stats-banner-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At Snap Paisa, we simplify financial access for individuals through instant approval, 
                secure processing, and seamless operations – purpose-built for modern lending needs.
              </motion.p>
              
              <motion.div 
                className="stats-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="stat-item">
                  <motion.div 
                    className="stat-number"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    50,000+
                  </motion.div>
                  <motion.div 
                    className="stat-label"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    Loans disbursed across India
                  </motion.div>
                </div>
                
                <div className="stat-item">
                  <motion.div 
                    className="stat-number"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    98%
                  </motion.div>
                  <motion.div 
                    className="stat-label"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    Instant approval rate
                  </motion.div>
                </div>
                
                <div className="stat-item">
                  <motion.div 
                    className="stat-number"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    viewport={{ once: true }}
                  >
                    30 min
                  </motion.div>
                  <motion.div 
                    className="stat-label"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    viewport={{ once: true }}
                  >
                    Average disbursal time
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Testing Section */}
        <section className="testing-section">
          <div className="testing-container">
            <div className="testing-image">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <AdvancedBackgroundRemover 
                  src={TestingImage} 
                  alt="Innovative Financial Solutions"
                  className="testing-image-processed"
                  method="auto"
                />
              </motion.div>
            </div>
            
            <div className="testing-content-wrapper">
              <div className="testing-header">
                <motion.h2 
                  className="testing-title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Apply <span className="highlight">Instantly</span> from Your Phone
                </motion.h2>
              </div>
              
              <div className="testing-content">
                <motion.div 
                  className="testing-content-box"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="testing-content-title">Why Choose Mobile Banking?</h3>
                  <p className="testing-content-text">
                    Skip the bank queues! Our mobile-first approach lets you apply for loans directly from your smartphone. 
                    Upload documents, complete verification, and get instant approval - all from the comfort of your home. 
                    No paperwork, no visits, just a few taps away from your financial freedom.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="testing-features"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="testing-feature-item">
                    <span className="testing-feature-icon">📱</span>
                    <span className="testing-feature-text">Mobile-First Application</span>
                  </div>
                  <div className="testing-feature-item">
                    <span className="testing-feature-icon">⚡</span>
                    <span className="testing-feature-text">Instant Approval Process</span>
                  </div>
                  <div className="testing-feature-item">
                    <span className="testing-feature-icon">🔒</span>
                    <span className="testing-feature-text">Secure & Paperless</span>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Simple Process
            </motion.h2>
            <div className="process-steps">
              {[
                {
                  step: "01",
                  title: "Apply Online",
                  description: "Fill the simple application form with basic details"
                },
                {
                  step: "02", 
                  title: "Upload Documents",
                  description: "Upload PAN, Aadhaar, and income proof documents"
                },
                {
                  step: "03",
                  title: "Get Approved",
                  description: "Receive instant approval within minutes"
                },
                {
                  step: "04",
                  title: "Receive Money",
                  description: "Get loan amount credited to your bank account"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="process-step"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="step-number">{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Calculator Section */}
         <section className="calculator-section">
          <div className="calculator-full-width">
            <motion.div 
              className="calculator-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Estimate Your Monthly Payment</h2>
              <p>Use our payment calculator to plan your loan repayment schedule</p>
              <InterestCalculator />
            </motion.div>
          </div>
        </section> 


        {/* Modern Services Section */}
        <section className="modern-services-section">
          <div className="modern-services-container">
            <motion.div 
              className="modern-services-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="modern-services-title">
                Experience <span className="highlight">Seamless</span> Loan Services
              </h2>
              <p className="modern-services-subtitle">
                Our advanced technology ensures quick processing and secure transactions. 
                Get the financial support you need with our reliable lending solutions.
              </p>
            </motion.div>
            
            <div className="modern-services-grid">
              {[
                {
                  icon: "🚀",
                  title: "Lightning Fast",
                  description: "Get approved and receive funds within minutes, not days"
                },
                {
                  icon: "🛡️",
                  title: "Bank-Level Security",
                  description: "Your data is protected with enterprise-grade encryption"
                },
                {
                  icon: "📊",
                  title: "Smart Analytics",
                  description: "AI-powered risk assessment for instant decisions"
                },
                {
                  icon: "💳",
                  title: "Flexible Repayment",
                  description: "Choose payment schedules that work for your budget"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="modern-service-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Section */}






        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="why-choose-container">
            <motion.h2 
              className="why-choose-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              WHY CHOOSE SNAP PAISA?
            </motion.h2>
            <div className="why-choose-grid">
              {[
                {
                  title: "Instant Approval",
                  description: "Get loan approval within minutes with our AI-powered assessment system"
                },
                {
                  title: "Bank-Level Security",
                  description: "Enterprise-level security with complete data encryption for risk-free operations"
                },
                {
                  title: "Advanced Technology",
                  description: "Leveraging cutting-edge technologies to empower quick and secure lending"
                },
                {
                  title: "Customer-Focused",
                  description: "Enhancing borrower experience with efficient, secure, and streamlined operations"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="why-choose-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="why-choose-card-title">{feature.title}</h3>
                  <p className="why-choose-card-description">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Loan Features */}
        {/* <section className="loan-features-section">
          <div className="container">
            <LoanFeatures />
          </div>
        </section> */}

        {/* Testimonials */}
        {/* <section className="testimonials-section">
          <div className="container">
            <Testimonial />
          </div>
        </section> */}




      </div>
      <ChatButton />
    </>
  );
};

export default Home;
