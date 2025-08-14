import React from "react";
import { motion } from "framer-motion";
import "../css/Common.css";
import bannerVideo from "../images/animated-new.mp4";

const Banner = () => {
  return (
    <div style={{ 
      width: '100%',
      height: '90vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        
      }}></div>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          height: '100%',
          zIndex: 1
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '3rem 2rem',
          maxWidth: '1440px',
          margin: '0 auto'
        }}>
          {/* Centered Content */}
          <div style={{
            textAlign: 'center',
            maxWidth: '800px'
          }}>
            <motion.h1
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 70,
              }}
              style={{
                fontSize: 'clamp(3rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '1.5rem',
                color: '#000000'
              }}
            >
              Your Trusted <br />
              Partner for Salaried Dreams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                marginBottom: '2rem',
                color: '#4a4a4a'
              }}
            >
              Making financial independence simple, fast, and stress-free.
            </motion.p>
            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center'
            }}>
              {/* Apply Now Button */}
              <motion.button
                className="btn-apply"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                }}
                onClick={() => (window.location.href = "/apply-now")}
                style={{
                  padding: '0.875rem 2rem',
                  borderRadius: '9999px',
                  backgroundColor: '#1401E7',
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Apply Now
              </motion.button>

              {/* Learn More Button */}
              <motion.button
                className="btn-learn"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                }}
                onClick={() => (window.location.href = "/about-us")}
                style={{
                  padding: '0.875rem 2rem',
                  borderRadius: '9999px',
                  backgroundColor: 'transparent',
                  color: '#1401E7',
                  border: '2px solid #1401E7',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: '#2671B7'
                }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Banner;
