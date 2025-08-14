import React from 'react';
import { Link } from 'react-router-dom';
import ChatButton from '../components/ChatButton';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="content_page_wrapper">
        {/* Modern Banner Section */}
        <div style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #1e293b 100%)',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          marginTop: '80px',
          zIndex: '1'
        }}>
          {/* Animated Background Elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '10%',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '15%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            borderRadius: '50%',
            animation: 'float 7s ease-in-out infinite',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}></div>
          
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: '2' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '0.75rem 2rem',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '700',
                marginBottom: '2rem',
                backdropFilter: 'blur(15px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                animation: 'slideInDown 1s ease-out 0.2s both',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                letterSpacing: '1px'
              }}>
                🔒 LEGAL INFORMATION
              </div>
              <h1 style={{
                fontSize: '4.5rem',
                fontWeight: '900',
                marginBottom: '1.5rem',
                lineHeight: '1.1',
                textShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                animation: 'fadeInUp 1.2s ease-out 0.4s both',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative'
              }}>
                Privacy Policy
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ffffff, #ff8c42, #ffffff)',
                  borderRadius: '2px',
                  animation: 'slideInRight 1s ease-out 1s both'
                }}></div>
              </h1>
              <p style={{
                fontSize: '1.4rem',
                opacity: '0.95',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6',
                animation: 'fadeInUp 1.2s ease-out 0.6s both',
                fontWeight: '500',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}>
                Your privacy is our priority. Learn how we protect and handle your personal information with the highest standards of security and transparency.
              </p>
              
              {/* Animated Stats */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '3rem',
                marginTop: '3rem',
                animation: 'fadeInUp 1.2s ease-out 0.8s both'
              }}>
                <div style={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1rem 1.5rem',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>🔒</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Secure</div>
                </div>
                <div style={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1rem 1.5rem',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>🛡️</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Protected</div>
                </div>
                <div style={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1rem 1.5rem',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>⚡</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Transparent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div style={{
          background: 'white',
          padding: '4rem 0'
        }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              padding: '3rem',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#64748b',
                  marginBottom: '2rem'
                }}>
                  <strong style={{ color: '#1e293b' }}>SnapPaisa</strong> ("we," "our," "us") operates the https://www.snappaisa.com website (the "Service"). This Privacy Policy explains how we collect, use, and share your personal information when you use our Service.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #ff6b35',
                  paddingLeft: '1rem'
                }}>
                  Information We Collect
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  We collect information you provide directly to us, such as when you create an account, apply for a loan, or contact us for support. This may include:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '1rem 0'
                }}>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Personal identification information (name, email address, phone number)
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Financial information (income, employment details, bank statements)
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Identity verification documents (PAN card, Aadhaar, address proof)
                  </li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #ff6b35',
                  paddingLeft: '1rem'
                }}>
                  How We Use Your Information
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  We use the information we collect to:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '1rem 0'
                }}>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Process your loan applications and provide financial services
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Verify your identity and prevent fraud
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Communicate with you about our services
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Comply with legal and regulatory requirements
                  </li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #ff6b35',
                  paddingLeft: '1rem'
                }}>
                  Information Sharing
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '1rem 0'
                }}>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    With service providers who assist us in operating our business
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    To comply with legal obligations or protect our rights
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    In connection with a business transfer or merger
                  </li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #ff6b35',
                  paddingLeft: '1rem'
                }}>
                  Data Security
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '1rem 0'
                }}>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Encryption of data in transit and at rest
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Regular security assessments and updates
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Access controls and authentication measures
                  </li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #ff6b35',
                  paddingLeft: '1rem'
                }}>
                  Your Rights
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  You have the right to:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '1rem 0'
                }}>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Access and review your personal information
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Request correction of inaccurate information
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Request deletion of your personal information
                  </li>
                  <li style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#64748b'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    Withdraw consent for data processing
                  </li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #ff6b35',
                  paddingLeft: '1rem'
                }}>
                  Contact Us
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  color: 'white',
                  marginTop: '1rem'
                }}>
                  <p style={{ margin: '0', fontSize: '1rem' }}>
                    <strong>Email:</strong> care@snappaisa.com
                  </p>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '1rem' }}>
                    <strong>Address:</strong> SnapPaisa Financial Services, India
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #ff6b35',
                  paddingLeft: '1rem'
                }}>
                  Changes to This Privacy Policy
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on our website.
                </p>
                {/* <div style={{
                  background: 'rgba(255, 107, 53, 0.1)',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  marginTop: '1rem'
                }}>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: '#ff6b35', fontWeight: '600' }}>
                    Last Updated: January 2024
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatButton />
    </>
  );
};

export default PrivacyPolicy;
