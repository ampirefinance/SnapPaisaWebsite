import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../images/logo.png";
import AmpireLogo from "../images/AmpireLogo.png";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ArrowUp,
    Shield,
    Clock,
    Users,
    Star,
    Award,
    TrendingUp,
    Zap,
    CheckCircle
} from "lucide-react";
import "./Footer.css";
import { APP_NAME, CONTACT_EMAIL, CONTACT_NUMBER, NBFC_ADDRESS } from "../Utils/constant";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    };

    return (
        <div>
            <footer className="modern-footer">
                {/* Animated Background Elements */}
                <div className="footer-bg-elements">
                    <div className="bg-circle bg-circle-1"></div>
                    <div className="bg-circle bg-circle-2"></div>
                    <div className="bg-circle bg-circle-3"></div>
                </div>

                <div className="footer-wrapper">
                    {/* Main Footer Content */}
                    <div className="footer-main">
                        <div className="footer-grid">
                            {/* Company Info */}
                            <div className="footer-section company-info">
                                <div className="footer-logo-container">
                                    <div className="logo-glow">
                                        <img src={FooterLogo} alt="Snap Paisa Logo" className="footer-logo" />
                                    </div>
                                    <div className="logo-text">
                                        <h3>Snap Paisa</h3>
                                        <div className="rating-badge">
                                            <Star className="star-icon" />
                                            <span>4.9/5</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="company-description">
                                    Empowering individuals with instant financial solutions through 
                                    advanced technology and customer-centric approach.
                                </p>

                                {/* Trust Indicators */}
                                <div className="trust-indicators">
                                    <div className="trust-item">
                                        <CheckCircle className="trust-icon" />
                                        <span>RBI Registered</span>
                                    </div>
                                    <div className="trust-item">
                                        <Shield className="trust-icon" />
                                        <span>256-bit SSL</span>
                                    </div>
                                </div>

                                                                <div className="powered-by">
                                    <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Associated Partner</p>
                                    <span style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '8px' }}>FINTECH CLOUD PRIVATE LIMITED</span>
                                 
                                </div>
                                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255, 107, 53, 0.1)', borderRadius: '12px', border: '1px solid rgba(255, 107, 53, 0.2)' }}>
                                    <p style={{ fontWeight: 'bold', marginBottom: '8px', color: '#1E3A8A' }}>Powered by SnapPaisa</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                        <img 
                                            src={AmpireLogo} 
                                            alt="SnapPaisa Logo" 
                                            style={{ 
                                                width: '80px', 
                                                height: 'auto',
                                                backgroundColor: 'white',
                                                padding: '6px',
                                                borderRadius: '6px',
                                                border: '1px solid rgba(226, 232, 240, 0.8)'
                                            }} 
                                        />
                                        <a 
                                            href="https://snappaisa.com/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ 
                                                fontSize: '0.9rem', 
                                                color: '#FF6B35', 
                                                textDecoration: 'none',
                                                fontWeight: '600'
                                            }}
                                        >
                                            Visit Website →
                                        </a>
                                    </div>
                                    <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '0', lineHeight: '1.4' }}>
                                        Empowering individuals with instant financial solutions through advanced technology and customer-centric approach.
                                    </p>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="footer-section">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li>
                                        <Link to="/" onClick={scrollToTop}>
                                            <span className="link-icon">🏠</span>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us" onClick={scrollToTop}>
                                            <span className="link-icon">ℹ️</span>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" onClick={scrollToTop}>
                                            <span className="link-icon">📞</span>
                                            Contact Us
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/apply-now" onClick={scrollToTop}>
                                            <span className="link-icon">🚀</span>
                                            Apply Now
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>

                            {/* Support */}
                            <div className="footer-section">
                                <h4>Support</h4>
                                <ul>
                                    <li>
                                        <Link to="/faq" onClick={scrollToTop}>
                                            <span className="link-icon">❓</span>
                                            FAQs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy" onClick={scrollToTop}>
                                            <span className="link-icon">🔒</span>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/terms-condition" onClick={scrollToTop}>
                                            <span className="link-icon">📋</span>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div className="footer-section contact-info">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>
                                        <div className="contact-icon-wrapper">
                                            <Phone className="icon" />
                                        </div>
                                        <div className="contact-content">
                                            <span className="contact-label">Call Us</span>
                                            <span className="contact-value">+91 {CONTACT_NUMBER}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-icon-wrapper">
                                            <Mail className="icon" />
                                        </div>
                                        <div className="contact-content">
                                            <span className="contact-label">Email</span>
                                            <span className="contact-value">{CONTACT_EMAIL}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-icon-wrapper">
                                            <MapPin className="icon" />
                                        </div>
                                        <div className="contact-content">
                                            <span className="contact-label">Address</span>
                                            <span className="contact-value">{NBFC_ADDRESS}</span>
                                        </div>
                                    </li>
                                </ul>
                                
                                {/* Enhanced Social Icons */}
                                <div className="social-section">
                                    <h5>Follow Us</h5>
                                    <div className="social-icons">
                                        <a href="#" className="social-icon facebook">
                                            <Facebook className="icon" />
                                        </a>
                                        <a href="#" className="social-icon instagram">
                                            <Instagram className="icon" />
                                        </a>
                                        <a href="#" className="social-icon linkedin">
                                            <Linkedin className="icon" />
                                        </a>
                                        <a href="#" className="social-icon twitter">
                                            <Twitter className="icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Statistics Section - After all other sections */}
                        {/* <div className="stats-section-footer">
                            <div className="stats-container">
                                <h4>Our Achievements</h4>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-number">50,000+</div>
                                        <div className="stat-label">Happy Customers</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">30 min</div>
                                        <div className="stat-label">Average Disbursal</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">₹500Cr+</div>
                                        <div className="stat-label">Total Disbursed</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <div className="copyright">
                                <p>Copyright@SnapPaisa Financial Services . All rights reserved.</p>
                            </div>
                            <div className="security-badges">
                                <div className="security-badge">
                                    <Shield className="security-icon" />
                                    <span>Bank-Grade Security</span>
                                </div>
                                <div className="security-badge">
                                    <Award className="security-icon" />
                                    <span>ISO 27001 Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Scroll to Top Button */}
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <ArrowUp className="arrow-icon" />
                    <span className="scroll-text">Top</span>
                </button>
            </footer>
        </div>
    );
};

export default Footer;
