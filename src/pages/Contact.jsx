import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import Swal from "sweetalert2";
import "../css/Common.css";
import "../css/Contact.css";
import aboutImage from "../images/about.jpg";
import contactBannerImage from "../images/contactBanner.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CONTACT_EMAIL, CONTACT_NUMBER, NBFC_ADDRESS } from "../Utils/constant";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  User,
  Building
} from "lucide-react";
import AdvancedBackgroundRemover from "../components/AdvancedBackgroundRemover";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [useBackgroundRemoval, setUseBackgroundRemoval] = useState(true);
  const [removalMethod, setRemovalMethod] = React.useState('auto');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!", formData);

    // Show SweetAlert notification
    Swal.fire({
      icon: "success",
      title: "Message Sent Successfully!",
      text: "Thank you for contacting us. We'll get back to you soon!",
      confirmButtonText: "OK",
      confirmButtonColor: "#ff6b35"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Contact Banner Section */}
      <section className="contact-banner-section" style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: '1'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 41, 59, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: '2' }}>
          <div className="banner-grid">
            <div style={{
              color: '#1e293b',
              maxWidth: '700px',
              paddingRight: '2rem',
              animation: 'slideInLeft 1s ease-out',
              marginLeft: 'auto',
              textAlign: 'right'
            }}>
              <h1 className="banner-title" style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #1e293b 50%, #ff6b35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginLeft: '0',
                animation: 'fadeInUp 1.2s ease-out 0.3s both',
                position: 'relative'
              }}>
                Get In Touch
              </h1>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '1.5rem',
                animation: 'fadeInUp 1.2s ease-out 0.5s both',
                textAlign: 'right',
                '@media (max-width: 1024px)': {
                  fontSize: '1.8rem',
                  textAlign: 'center'
                },
                '@media (max-width: 768px)': {
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                },
                '@media (max-width: 480px)': {
                  fontSize: '1.3rem',
                  marginBottom: '0.5rem'
                }
              }}>
                We're Here to Help
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#64748b',
                lineHeight: '1.7',
                marginBottom: '2rem',
                animation: 'fadeInUp 1.2s ease-out 0.7s both',
                textAlign: 'right',
                fontWeight: '700',
                '@media (max-width: 1024px)': {
                  fontSize: '1.1rem',
                  textAlign: 'center'
                },
                '@media (max-width: 768px)': {
                  fontSize: '1rem',
                  marginBottom: '1.5rem'
                },
                '@media (max-width: 480px)': {
                  fontSize: '0.9rem',
                  marginBottom: '1rem'
                }
              }}>
                Have questions about our loan services? Need assistance with your application? Our dedicated team is ready to provide personalized support and expert guidance. Reach out to us through any of our contact channels.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '2rem',
                animation: 'fadeInUp 1.2s ease-out 0.9s both',
                textAlign: 'right',
                fontWeight: '700',
                '@media (max-width: 1024px)': {
                  fontSize: '1rem',
                  textAlign: 'center'
                },
                '@media (max-width: 768px)': {
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem'
                },
                '@media (max-width: 480px)': {
                  fontSize: '0.8rem',
                  marginBottom: '1rem'
                }
              }}>
                Whether you're looking for quick loan approval, have questions about our terms, or need help with the application process, we're committed to making your financial journey smooth and transparent.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                animation: 'fadeInUp 1.2s ease-out 1.1s both',
                justifyContent: 'flex-end',
                '@media (max-width: 1024px)': {
                  justifyContent: 'center'
                },
                '@media (max-width: 768px)': {
                  gap: '0.5rem'
                },
                '@media (max-width: 480px)': {
                  flexDirection: 'column',
                  alignItems: 'center'
                }
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Phone size={16} />
                  Call Now
                </div>
                <div style={{
                  background: 'rgba(30, 41, 59, 0.1)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  color: '#1e293b',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Mail size={16} />
                  Send Email
                </div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'slideInRight 1s ease-out 0.5s both',
              position: 'relative',
              width: '100%',
              minWidth: '0',
              '@media (max-width: 1024px)': {
                order: '-1'
              },
              '@media (max-width: 768px)': {
                marginTop: '1rem'
              },
              '@media (max-width: 480px)': {
                marginTop: '0.5rem'
              }
            }}>
              <AdvancedBackgroundRemover
                src={contactBannerImage}
                alt="Contact Us Banner"
                method={removalMethod}
                style={{
                  maxWidth: '1100px',
                  width: '100%',
                  minWidth: '0',
                  objectFit: 'contain',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  animation: 'float 3s ease-in-out infinite',
                  '@media (max-width: 1024px)': {
                    maxWidth: '800px'
                  },
                  '@media (max-width: 768px)': {
                    maxWidth: '600px',
                    borderRadius: '15px'
                  },
                  '@media (max-width: 480px)': {
                    maxWidth: '100%',
                    borderRadius: '10px'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Banner Section */}
      <section style={{
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
        '@media (max-width: 768px)': {
          padding: '4rem 0'
        },
        '@media (max-width: 480px)': {
          padding: '2rem 0'
        }
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: '1' }}>
          <div style={{ textAlign: 'center' }}>
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
              <span style={{ color: 'white', fontSize: '1rem', fontWeight: '700', letterSpacing: '1px' }}>📞 GET IN TOUCH</span>
            </div>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              color: 'white',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              letterSpacing: '2px',
              lineHeight: '1.2',
              '@media (max-width: 768px)': {
                fontSize: '2.5rem',
                letterSpacing: '1px'
              },
              '@media (max-width: 480px)': {
                fontSize: '2rem',
                letterSpacing: '0.5px'
              }
            }}>
              Contact Us
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontWeight: '400',
              '@media (max-width: 768px)': {
                fontSize: '1.1rem',
                maxWidth: '600px'
              },
              '@media (max-width: 480px)': {
                fontSize: '1rem',
                maxWidth: '100%',
                padding: '0 1rem'
              }
            }}>
              Have questions about our services? We're here to help! Reach out to our team for personalized assistance and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
        '@media (max-width: 768px)': {
          padding: '3rem 0'
        },
        '@media (max-width: 480px)': {
          padding: '2rem 0'
        }
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: '1' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-header" style={{ color: 'white' }}>
              Get In Touch
            </h2>
            <p className="section-description" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Choose your preferred way to reach us. Our team is ready to assist you with any questions or concerns.
            </p>
          </div>

          <div className="contact-info-grid">
            {/* Phone Contact */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '3rem 2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'white'
              }}>
                <Phone size={32} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Call Us
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                marginBottom: '1rem'
              }}>
                Speak directly with our customer support team
              </p>
              <a href={`tel:${CONTACT_NUMBER}`} style={{
                color: '#ff6b35',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'block'
              }}>
                {CONTACT_NUMBER}
              </a>
            </div>

            {/* Email Contact */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '3rem 2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'white'
              }}>
                <Mail size={32} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Email Us
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                marginBottom: '1rem'
              }}>
                Send us an email for detailed inquiries
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{
                color: '#ff6b35',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'block'
              }}>
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Address */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '3rem 2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'white'
              }}>
                <MapPin size={32} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Visit Us
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                marginBottom: '1rem'
              }}>
                Our registered office address
              </p>
              <p style={{
                color: '#ff6b35',
                fontSize: '1rem',
                fontWeight: '500',
                lineHeight: '1.5'
              }}>
                {NBFC_ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Grievance Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
        '@media (max-width: 768px)': {
          padding: '3rem 0'
        },
        '@media (max-width: 480px)': {
          padding: '2rem 0'
        }
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle at 70% 30%, rgba(255, 107, 53, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: '1' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-header" style={{ color: '#1e293b' }}>
              Support & Grievance
            </h2>
            <p className="section-description" style={{ color: '#64748b' }}>
              We're committed to providing excellent customer support and addressing any concerns promptly. 
              Choose the appropriate contact channel based on your needs.
            </p>
          </div>

          <div className="support-grievance-grid">
            {/* Support Email */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '3rem 2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 107, 53, 0.2)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'white'
              }}>
                <MessageSquare size={32} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                Customer Support
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                For general inquiries, technical support, and assistance with your loan application
              </p>
              <a href="mailto:support@ampirefinance.com" style={{
                color: '#10b981',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'block',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '10px',
                border: '2px solid rgba(16, 185, 129, 0.2)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(16, 185, 129, 0.2)';
                e.target.style.transform = 'scale(1.05)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(16, 185, 129, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}>
                support@ampirefinance.com
              </a>
            </div>

            {/* Grievance Email */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '3rem 2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'white'
              }}>
                <Building size={32} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                Grievance Redressal
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                For complaints, grievances, and escalation of unresolved issues
              </p>
              <a href="mailto:grievance@ampirefinance.com" style={{
                color: '#ef4444',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'block',
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '10px',
                border: '2px solid rgba(239, 68, 68, 0.2)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(239, 68, 68, 0.2)';
                e.target.style.transform = 'scale(1.05)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(239, 68, 68, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}>
                grievance@ampirefinance.com
              </a>
            </div>

            {/* Nodal Officer Email */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '3rem 2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'white'
              }}>
                <User size={32} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                Nodal Officer
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                For regulatory compliance and official communications
              </p>
              <a href="mailto:nodal@ampirefinance.com" style={{
                color: '#3b82f6',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'block',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '10px',
                border: '2px solid rgba(59, 130, 246, 0.2)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(59, 130, 246, 0.2)';
                e.target.style.transform = 'scale(1.05)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}>
                nodal@ampirefinance.com
              </a>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 107, 53, 0.1)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(255, 107, 53, 0.2)',
            textAlign: 'center',
            marginTop: '2rem',
            maxWidth: '1000px',
            margin: '2rem auto 0 auto'
          }}>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Response Time Commitment
            </h4>
            <p style={{
              color: '#64748b',
              fontSize: '1rem',
              lineHeight: '1.6',
              margin: '0'
            }}>
              We strive to respond to all inquiries within 24 hours during business days. 
              For urgent matters, please call our customer support number for immediate assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{
        background: 'white',
        padding: '4rem 0',
        position: 'relative',
        '@media (max-width: 768px)': {
          padding: '3rem 0'
        },
        '@media (max-width: 480px)': {
          padding: '2rem 0'
        }
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '1rem',
              '@media (max-width: 768px)': {
                fontSize: '2rem'
              },
              '@media (max-width: 480px)': {
                fontSize: '1.8rem'
              }
            }}>
              Send Us a Message
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
              '@media (max-width: 768px)': {
                fontSize: '1rem',
                maxWidth: '500px'
              },
              '@media (max-width: 480px)': {
                fontSize: '0.9rem',
                maxWidth: '100%',
                padding: '0 1rem'
              }
            }}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  padding: '12px 40px',
                  borderRadius: '25px',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #e55a2b 0%, #ff7a35 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(255, 107, 53, 0.3)'
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
