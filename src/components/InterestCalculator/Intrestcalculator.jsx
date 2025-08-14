import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InterestCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTenure, setLoanTenure] = useState(1);
  const [interestRate, setInterestRate] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const styles = {
    container: {
      width: '100%',
      maxWidth: '100%',
      margin: '0',
      padding: '6rem 4rem',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    },
    containerBefore: {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(30, 58, 138, 0.05) 100%)',
      borderRadius: '24px',
      zIndex: '-1'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #ff6b35, #1e3a8a)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '2rem',
      textAlign: 'center',
      letterSpacing: '-0.02em',
      height: '50px'
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#64748b',
      textAlign: 'center',
      marginBottom: '3rem',
      fontWeight: '400'
    },
    contentWrapper: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    slidersSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem'
    },
    sliderSection: {
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '2rem',
      borderRadius: '16px',
      border: '1px solid rgba(226, 232, 240, 0.6)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease'
    },
    sliderSectionHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(255, 107, 53, 0.15)',
      borderColor: '#ff6b35'
    },
    label: {
      display: 'block',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    valueDisplay: {
      fontSize: '1.5rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #ff6b35, #1e3a8a)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textAlign: 'right'
    },
    slider: {
      width: '100%',
      height: '8px',
      borderRadius: '4px',
      outline: 'none',
      cursor: 'pointer',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
      background: '#e2e8f0',
      marginTop: '1rem'
    },
    resultsSection: {
      background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(30, 58, 138, 0.1))',
      padding: '2.5rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 107, 53, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    },
    resultsSectionBefore: {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
      borderRadius: '20px'
    },
    resultRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 0',
      borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
      fontSize: '1.1rem'
    },
    resultRowLast: {
      borderBottom: 'none',
      paddingBottom: '0',
      marginTop: '1rem',
      paddingTop: '1.5rem',
      borderTop: '2px solid rgba(255, 107, 53, 0.3)'
    },
    resultLabel: {
      color: '#475569',
      fontWeight: '500',
      fontSize: '1rem'
    },
    resultValue: {
      color: '#1e293b',
      fontWeight: '700',
      fontSize: '1.25rem'
    },
    resultValueHighlight: {
      background: 'linear-gradient(135deg, #ff6b35, #1e3a8a)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontSize: '1.5rem',
      fontWeight: '800'
    },
    button: {
      width: '100%',
      background: 'linear-gradient(135deg, #ff6b35, #1e3a8a)',
      border: 'none',
      color: 'white',
      padding: '1.5rem 2rem',
      borderRadius: '16px',
      fontWeight: '700',
      fontSize: '1.2rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease',
      marginTop: '2rem',
      boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 32px rgba(255, 107, 53, 0.4)'
    },
    icon: {
      width: '1.25rem',
      height: '1.25rem',
      color: 'white'
    },
    emiBreakdown: {
      marginTop: '2rem',
      padding: '1.5rem',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '12px',
      border: '1px solid rgba(226, 232, 240, 0.6)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100% !important',
      maxWidth: '1200px',
      textAlign: 'center'
    },
    emiTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#475569',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    emiGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      maxWidth: '600px',
      margin: '0 auto'
    },
    emiItem: {
      textAlign: 'center',
      padding: '1rem',
      background: 'rgba(255, 255, 255, 0.6)',
      borderRadius: '8px',
      border: '1px solid rgba(226, 232, 240, 0.4)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    emiLabel: {
      fontSize: '0.875rem',
      color: '#64748b',
      fontWeight: '500',
      marginBottom: '0.5rem'
    },
    emiValue: {
      fontSize: '1.125rem',
      fontWeight: '700',
      color: '#1e293b'
    }
  };

  useEffect(() => {
    const principal = loanAmount;
    const dailyRate = interestRate / 100;
    const days = loanTenure;

    // Daily interest calculation for payday loans
    const dailyInterest = principal * dailyRate * days;
    const totalAmount = principal + dailyInterest;

    setMonthlyEMI(Math.round(dailyInterest / days)); // Daily interest amount
    setTotalInterest(Math.round(dailyInterest));
    setTotalAmount(Math.round(totalAmount));
  }, [loanAmount, loanTenure, interestRate]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getSliderBackground = (value, min, max) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #ff6b35 0%, #1e3a8a ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;
  };

  const sliderStyles = `
    .modern-slider {
      -webkit-appearance: none;
      appearance: none;
      height: 8px;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .modern-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff6b35, #1e3a8a);
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
      border: 3px solid white;
      transition: all 0.3s ease;
    }

    .modern-slider::-moz-range-thumb {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff6b35, #1e3a8a);
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
      border: 3px solid white;
      transition: all 0.3s ease;
    }

    .modern-slider:focus {
      outline: none;
    }

    .modern-slider:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.2), 0 4px 12px rgba(255, 107, 53, 0.4);
      transform: scale(1.1);
    }

    .modern-slider:focus::-moz-range-thumb {
      box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.2), 0 4px 12px rgba(255, 107, 53, 0.4);
      transform: scale(1.1);
    }

    .modern-slider:hover::-webkit-slider-thumb {
      transform: scale(1.1);
    }

    .modern-slider:hover::-moz-range-thumb {
      transform: scale(1.1);
    }

    .modern-button:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 12px 32px rgba(255, 107, 53, 0.4) !important;
    }

    .slider-section:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15) !important;
      border-color: #ff6b35 !important;
    }

    @media (max-width: 768px) {
      .calculator-container {
        padding: 2rem !important;
        margin: 1rem !important;
      }
      
      .calculator-title {
        font-size: 2rem !important;
      }
      
      .content-wrapper {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }

      .emi-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: sliderStyles }} />
      <div className="calculator-container" style={styles.container}>
        <div style={styles.containerBefore}></div>
        
        <h1 style={styles.title}>Personal Loan Calculator</h1>
        <p style={styles.subtitle}>Calculate your daily interest and plan your short-term loan repayment</p>
        
        <div className="content-wrapper" style={styles.contentWrapper}>
          {/* Left Section - Sliders */}
          <div style={styles.slidersSection}>
            {/* Loan Amount Slider */}
            <div className="slider-section" style={styles.sliderSection}>
              <label style={styles.label}>
                <span>Loan Amount</span>
                <span style={styles.valueDisplay}>₹{formatCurrency(loanAmount)}</span>
              </label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="modern-slider"
                style={{
                  ...styles.slider,
                  background: getSliderBackground(loanAmount, 1000, 100000)
                }}
              />
            </div>

            {/* Loan Tenure Slider */}
            <div className="slider-section" style={styles.sliderSection}>
              <label style={styles.label}>
                <span>Loan Tenure (Days)</span>
                <span style={styles.valueDisplay}>{loanTenure} days</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                className="modern-slider"
                style={{
                  ...styles.slider,
                  background: getSliderBackground(loanTenure, 1, 30)
                }}
              />
            </div>

            {/* Interest Rate Slider */}
            <div className="slider-section" style={styles.sliderSection}>
              <label style={styles.label}>
                <span>Daily Interest Rate (%)</span>
                <span style={styles.valueDisplay}>{interestRate}</span>
              </label>
              <input
                type="range"
                min="0.25"
                max="2"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="modern-slider"
                style={{
                  ...styles.slider,
                  background: getSliderBackground(interestRate, 0.25, 2)
                }}
              />
            </div>
          </div>

          {/* Right Section - Results and Button */}
          <div style={styles.rightSection}>
            {/* Results Section */}
            <div style={styles.resultsSection}>
              <div style={styles.resultsSectionBefore}></div>
              
              <div style={styles.resultRow}>
                <span style={styles.resultLabel}>Loan Amount:</span>
                <span style={styles.resultValue}>₹{formatCurrency(loanAmount)}</span>
              </div>

              <div style={styles.resultRow}>
                <span style={styles.resultLabel}>Daily Interest Rate:</span>
                <span style={styles.resultValue}>{interestRate}% per day</span>
              </div>

              <div style={styles.resultRow}>
                <span style={styles.resultLabel}>Loan Tenure:</span>
                <span style={styles.resultValue}>{loanTenure} days</span>
              </div>

              <div style={styles.resultRow}>
                <span style={styles.resultLabel}>Daily Interest:</span>
                <span style={styles.resultValueHighlight}>₹{formatCurrency(monthlyEMI)}</span>
              </div>

              <div style={styles.resultRow}>
                <span style={styles.resultLabel}>Total Interest:</span>
                <span style={styles.resultValue}>₹{formatCurrency(totalInterest)}</span>
              </div>

              <div style={{...styles.resultRow, ...styles.resultRowLast}}>
                <span style={styles.resultLabel}>Total Amount:</span>
                <span style={styles.resultValueHighlight}>₹{formatCurrency(totalAmount)}</span>
              </div>
            </div>

            {/* Loan Breakdown - Centered */}
            <div style={{...styles.emiBreakdown, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{width: '100% !important', maxWidth: '1200px', textAlign: 'center'}}>
                <div style={styles.emiTitle}>Loan Breakdown</div>
                <div className="emi-grid" style={{...styles.emiGrid, margin: '0 auto'}}>
                  <div style={styles.emiItem}>
                    <div style={styles.emiLabel}>Principal</div>
                    <div style={styles.emiValue}>₹{formatCurrency(loanAmount)}</div>
                  </div>
                  <div style={styles.emiItem}>
                    <div style={styles.emiLabel}>Interest</div>
                    <div style={styles.emiValue}>₹{formatCurrency(totalInterest)}</div>
                  </div>
                  <div style={styles.emiItem}>
                    <div style={styles.emiLabel}>Total</div>
                    <div style={styles.emiValue}>₹{formatCurrency(totalAmount)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Now Button */}
            <Link to="/apply-now" style={{ textDecoration: 'none', color: 'inherit' }}>
              <button className="modern-button" style={styles.button}>
                <span>Apply for Loan Now</span>
                <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestCalculator;