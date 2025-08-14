import React from 'react';
import { Link } from 'react-router-dom';
import ChatButton from '../components/ChatButton';

const TermsandConditions = () => {
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
                ⚖️ LEGAL INFORMATION
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
                Terms & Conditions
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
                Please read these terms carefully before using our services. We ensure transparency and clarity in all our agreements.
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
                  <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>📋</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Clear</div>
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
                  <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>⚖️</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Fair</div>
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
                  <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>🤝</div>
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
                  Welcome to <strong style={{ color: '#1e293b' }}>SnapPaisa</strong>. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
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
                  Acceptance of Terms
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  By accessing and using the SnapPaisa website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
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
                  Use License
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  Permission is granted to temporarily download one copy of the materials (information or software) on SnapPaisa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
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
                    Modify or copy the materials
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
                    Use the materials for any commercial purpose
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
                    Attempt to reverse engineer any software contained on the website
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
                    Remove any copyright or other proprietary notations from the materials
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
                  Loan Services
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  Our loan services are subject to the following terms:
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
                    All loan applications are subject to approval and verification
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
                    Interest rates and terms are subject to change without notice
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
                    Late payments may result in additional fees and penalties
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
                    Default on payments may affect your credit score
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
                  User Responsibilities
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  As a user of our services, you agree to:
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
                    Provide accurate and complete information
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
                    Maintain the security of your account credentials
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
                    Notify us immediately of any unauthorized use
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
                    Comply with all applicable laws and regulations
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
                  Privacy Policy
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  Our Privacy Policy outlines how we collect, use, and protect your personal information. By using the Site and Services, you agree to our Privacy Policy.
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
                  Intellectual Property
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  All content on the Site, including text, graphics, logos, and images, is the property of SnapPaisa and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
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
                  Limitation of Liability
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  SnapPaisa shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
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
                  Termination
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
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
                  Governing Law
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
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
                  Changes to Terms
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
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

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #ff6b35',
                  paddingLeft: '1rem'
                }}>
                  Contact Information
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  If you have any questions about these Terms and Conditions, please contact us at:
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
            </div>
          </div>
        </div>
      </div>
      <ChatButton />
    </>
  );
};

export default TermsandConditions;
