import React from "react";
import "../css/Common.css";
import { Link } from "react-router-dom";
import AboutBannerImage from '../images/AboutBanner.jpg';
import { APP_NAME } from "../Utils/constant";
import AdvancedBackgroundRemover from "../components/AdvancedBackgroundRemover";
import ChatButton from "../components/ChatButton";

const About = () => {
  const [useBackgroundRemoval, setUseBackgroundRemoval] = React.useState(true);
  const [removalMethod, setRemovalMethod] = React.useState('auto');

  return (
    <>
      <div className="page_wrapper">
        {/* New About Banner Section */}
        <section className="about-banner-section">
          <div className="about-banner-container">
            <div className="about-banner-content">
              <div className="about-banner-text">
                <h1 className="about-banner-title">
                  About <span className="highlight">Snap Paisa</span>
                </h1>
                <h2 className="about-banner-subheader">
                  Your Trusted Financial Partner
                </h2>
                <p className="about-banner-subtitle">
                  Empowering individuals with instant financial solutions through advanced technology. We are your trusted partner for personal loans in India, offering quick approvals and competitive rates.
                </p>
                <p className="about-banner-description">
                  With our RBI-registered NBFC status and cutting-edge fintech platform, we provide seamless digital lending experiences. Our mission is to make financial inclusion a reality for every working professional across India, ensuring transparent processes and customer-centric solutions.
                </p>
                <div className="about-banner-buttons">
                  <Link to="/apply-now" className="about-banner-btn primary">
                    Apply Now
                  </Link>
                  <Link to="/contact" className="about-banner-btn secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="about-banner-image">
                {useBackgroundRemoval ? (
                  <AdvancedBackgroundRemover 
                    src={AboutBannerImage}
                    alt="About Snap Paisa"
                    className="about-banner-img-container"
                    method={removalMethod}
                  />
                ) : (
                  <div className="about-banner-img-container">
                    <img 
                      src={AboutBannerImage}
                      alt="About Snap Paisa"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* About Us Content Section */}
        <section className="about-content-section">
          <div className="container">
            <div className="about-content-simple">
              <div className="about-content-text">
                <h2 className="about-content-title">
                  POWERING INSTANT LOANS WITH SCALABLE FINANCIAL SOLUTIONS
                </h2>
                <p className="about-content-description">
                  At Snap Paisa, we simplify financial access for individuals through instant approval, secure processing, and seamless operations - purpose-built for modern lending needs.
                </p>
                <p className="about-content-paragraph">
                  With our RBI-registered NBFC status and cutting-edge fintech platform, we provide seamless digital lending experiences. Our mission is to make financial inclusion a reality for every working professional across India, ensuring transparent processes and customer-centric solutions.
                </p>
                <p className="about-content-rewritten">
                  SnapPaisa is your trusted provider of personal loans for salaried professionals in India, offering quick and flexible financial solutions for unexpected expenses, medical emergencies, and home improvements—all at your fingertips! As part of an RBI-registered NBFC, we are committed to empowering millennials with innovative loan options, ensuring fast approvals with customer-friendly terms.
                </p>
              </div>
              


              {/* Process Section */}
              <div className="about-process-section">
                <h3 className="process-title">How It Works</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4 className="step-title">Online Application</h4>
                      <p className="step-description">
                        Start by filling out our quick and easy loan application form online. You'll need to provide some basic personal information, employment details, and the loan amount you wish to apply for.
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4 className="step-title">Instant Verification</h4>
                      <p className="step-description">
                        Our advanced technology allows us to verify your documents and creditworthiness immediately. Within minutes, you will receive a preliminary decision on your loan application.
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4 className="step-title">Approval and Disbursal</h4>
                      <p className="step-description">
                        Once your loan is approved, the funds will be transferred directly to your bank account. In most cases, this happens within 24-48 hours of approval, but with us, you can get it in mere 5 minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Achievements Section */}
        <section className="achievements-section">
          <div className="container">
            <div className="achievements-content">
              <h2 className="achievements-title">
                Our <span className="highlight">Achievements</span>
              </h2>
              <div className="achievements-underline">
                <div className="underline-orange"></div>
                <div className="underline-blue"></div>
              </div>
              <div className="achievements-grid">
                <div className="achievement-card">
                  <div className="achievement-number">50,000+</div>
                  <div className="achievement-label">Happy Customers</div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-number">30 min</div>
                  <div className="achievement-label">Average Disbursal</div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-number">₹500Cr+</div>
                  <div className="achievement-label">Total Disbursed</div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Technology & Innovation Section */}
        <section style={{
          background: '#ff6b35',
          padding: '5rem 0',
          margin: '3rem 0'
        }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                WHY CHOOSE SNAP PAISA?
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '3rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '1rem' 
                }}>
                  Scalable Technology
                </h3>
                <p style={{ 
                  color: 'white', 
                  lineHeight: '1.6', 
                  fontSize: '1.1rem',
                  opacity: '0.95'
                }}>
                  Extensive industry knowledge ensuring unmatched quality and reliability. Our platform handles thousands of applications simultaneously with zero downtime.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '1rem' 
                }}>
                  Robust Compliance
                </h3>
                <p style={{ 
                  color: 'white', 
                  lineHeight: '1.6', 
                  fontSize: '1.1rem',
                  opacity: '0.95'
                }}>
                  Ensuring absolute regulatory compliance for risk-free operations. RBI-registered NBFC with bank-grade security protocols and data protection.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '1rem' 
                }}>
                  Cutting-Edge Technology
                </h3>
                <p style={{ 
                  color: 'white', 
                  lineHeight: '1.6', 
                  fontSize: '1.1rem',
                  opacity: '0.95'
                }}>
                  Leveraging advanced AI and machine learning to empower growth and innovation. Real-time credit assessment and instant approval systems.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '1rem' 
                }}>
                  Customer-Focused
                </h3>
                <p style={{ 
                  color: 'white', 
                  lineHeight: '1.6', 
                  fontSize: '1.1rem',
                  opacity: '0.95'
                }}>
                  Enhancing borrower experience with efficient, secure, and streamlined operations. 24/7 customer support and personalized loan solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          padding: '5rem 0',
          margin: '3rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>
          
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: '1' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                WHAT OUR CUSTOMERS SAY
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Real stories from real customers who trust SnapPaisa for their financial needs
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '1rem',
                gap: '0.5rem'
              }}>
                <span style={{
                  color: '#ff6b35',
                  fontSize: '1.5rem',
                  animation: 'pulse 2s infinite'
                }}>←</span>
                <span style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem'
                }}>
                  Scroll to see more testimonials
                </span>
                <span style={{
                  color: '#ff6b35',
                  fontSize: '1.5rem',
                  animation: 'pulse 2s infinite'
                }}>→</span>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '2rem',
              overflowX: 'auto',
              padding: '2rem 0',
              scrollbarWidth: 'thin',
              scrollbarColor: '#ff6b35 #1e293b',
              msOverflowStyle: 'auto',
              position: 'relative'
            }} className="testimonials-scroll">
              <div style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.3), transparent)',
                pointerEvents: 'none',
                animation: 'fadeInOut 2s infinite',
                zIndex: '2'
              }}></div>
              <div style={{
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.3))',
                pointerEvents: 'none',
                animation: 'fadeInOut 2s infinite',
                zIndex: '2'
              }}></div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    R
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      Rajesh Kumar
                    </h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      Software Engineer, Bangalore
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ff6b35', fontSize: '1.2rem', marginRight: '0.25rem' }}>★</span>
                  ))}
                </div>
                <p style={{
                  color: 'white',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "SnapPaisa helped me get an emergency loan within 30 minutes when I needed it most. The process was incredibly smooth and transparent. Highly recommended!"
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    P
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      Priya Sharma
                    </h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      Marketing Manager, Mumbai
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ff6b35', fontSize: '1.2rem', marginRight: '0.25rem' }}>★</span>
                  ))}
                </div>
                <p style={{
                  color: 'white',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "The best part about SnapPaisa is their customer service. They guided me through the entire process and answered all my questions patiently. Truly customer-focused!"
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    A
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      Amit Patel
                    </h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      Business Owner, Delhi
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ff6b35', fontSize: '1.2rem', marginRight: '0.25rem' }}>★</span>
                  ))}
                </div>
                <p style={{
                  color: 'white',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "As a business owner, I needed quick funding for expansion. SnapPaisa delivered exactly what they promised - fast approval and competitive rates. Excellent service!"
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative',
                minWidth: '350px',
                flexShrink: '0'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    S
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      Sneha Verma
                    </h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      HR Manager, Pune
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ff6b35', fontSize: '1.2rem', marginRight: '0.25rem' }}>★</span>
                  ))}
                </div>
                <p style={{
                  color: 'white',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "I was skeptical about online loans, but SnapPaisa changed my perspective. The entire process was transparent and they kept me informed at every step. Great experience!"
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative',
                minWidth: '350px',
                flexShrink: '0'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    K
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      Karan Singh
                    </h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      IT Consultant, Hyderabad
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ff6b35', fontSize: '1.2rem', marginRight: '0.25rem' }}>★</span>
                  ))}
                </div>
                <p style={{
                  color: 'white',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "The mobile app is fantastic! I applied for a loan while commuting and got approval before reaching home. SnapPaisa's technology is truly impressive."
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative',
                minWidth: '350px',
                flexShrink: '0'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    M
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      Meera Patel
                    </h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      Doctor, Chennai
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ff6b35', fontSize: '1.2rem', marginRight: '0.25rem' }}>★</span>
                  ))}
                </div>
                <p style={{
                  color: 'white',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "As a doctor, I needed funds for medical equipment. SnapPaisa understood my urgency and processed everything quickly. Their rates are also very competitive!"
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative',
                minWidth: '350px',
                flexShrink: '0'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    V
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      Vikram Reddy
                    </h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      Entrepreneur, Bangalore
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ff6b35', fontSize: '1.2rem', marginRight: '0.25rem' }}>★</span>
                  ))}
                </div>
                <p style={{
                  color: 'white',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "SnapPaisa helped me scale my startup when traditional banks were too slow. Their digital-first approach and quick processing saved my business!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Trust Section */}
        <section style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
          padding: '5rem 0',
          margin: '3rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            pointerEvents: 'none'
          }}></div>
          
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: '1' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '0.75rem 2.5rem',
                borderRadius: '30px',
                marginBottom: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <span style={{ color: 'white', fontSize: '1rem', fontWeight: '700', letterSpacing: '1px' }}>🔒 SECURITY FIRST</span>
              </div>
              <h2 style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                color: 'white',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                letterSpacing: '2px',
                lineHeight: '1.2'
              }}>
                Your Trust, Our Priority
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '650px',
                margin: '0 auto',
                lineHeight: '1.7',
                fontWeight: '400'
              }}>
                We understand that trust is earned through transparency, security, and reliability. Every aspect of our platform is designed with your security in mind.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '3rem 2rem',
                borderRadius: '30px',
                backdropFilter: 'blur(15px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center'
              }} onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-15px) rotateY(5deg)';
                e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
                e.target.style.border = '2px solid rgba(255, 255, 255, 0.6)';
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) rotateY(0deg)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                e.target.style.border = '2px solid rgba(255, 255, 255, 0.3)';
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  fontSize: '3rem',
                  color: '#ff6b35',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  🏛️
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  pointerEvents: 'none'
                }}>
                  RBI-Registered NBFC
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.7',
                  fontSize: '1.1rem',
                  marginBottom: '1.5rem',
                  pointerEvents: 'none'
                }}>
                  Fully compliant with Reserve Bank of India regulations, ensuring complete transparency and regulatory adherence in all operations.
                </p>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.5rem 1rem',
                  borderRadius: '15px',
                  display: 'inline-block',
                  pointerEvents: 'none'
                }}>
                  <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600' }}>✓ Verified</span>
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '3rem 2rem',
                borderRadius: '30px',
                backdropFilter: 'blur(15px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center'
              }} onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-15px) rotateY(5deg)';
                e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
                e.target.style.border = '2px solid rgba(255, 255, 255, 0.6)';
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) rotateY(0deg)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                e.target.style.border = '2px solid rgba(255, 255, 255, 0.3)';
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  fontSize: '3rem',
                  color: '#ff6b35',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  animation: 'float 3s ease-in-out infinite 0.5s'
                }}>
                  🔐
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  pointerEvents: 'none'
                }}>
                  Military-Grade Encryption
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.7',
                  fontSize: '1.1rem',
                  marginBottom: '1.5rem',
                  pointerEvents: 'none'
                }}>
                  Your data is protected with 256-bit SSL encryption, secure servers, and multi-factor authentication systems.
                </p>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.5rem 1rem',
                  borderRadius: '15px',
                  display: 'inline-block',
                  pointerEvents: 'none'
                }}>
                  <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600' }}>🔒 Secure</span>
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '3rem 2rem',
                borderRadius: '30px',
                backdropFilter: 'blur(15px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center'
              }} onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-15px) rotateY(5deg)';
                e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
                e.target.style.border = '2px solid rgba(255, 255, 255, 0.6)';
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) rotateY(0deg)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                e.target.style.border = '2px solid rgba(255, 255, 255, 0.3)';
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  fontSize: '3rem',
                  color: '#ff6b35',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  animation: 'float 3s ease-in-out infinite 1s'
                }}>
                  🛡️
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  pointerEvents: 'none'
                }}>
                  Zero Data Breaches
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.7',
                  fontSize: '1.1rem',
                  marginBottom: '1.5rem'
                }}>
                  Complete protection of your personal and financial information with advanced security protocols and monitoring.
                </p>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.5rem 1rem',
                  borderRadius: '15px',
                  display: 'inline-block',
                  pointerEvents: 'none'
                }}>
                  <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600' }}>🛡️ Protected</span>
                </div>
              </div>
            </div>

            {/* Security Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '4rem',
              maxWidth: '800px',
              margin: '4rem auto 0'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem' }}>99.9%</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem' }}>Uptime</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem' }}>256-bit</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem' }}>Encryption</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem' }}>24/7</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem' }}>Monitoring</div>
              </div>
            </div>
          </div>
        </section>


      </div>
      
    </>
  );
};

export default About;
