import styled from "styled-components";
import bannerImg from "../../images/bannerimg.png";

export const DashboardWrapper = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
  min-height: 100vh;
  padding: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(30, 58, 138, 0.05) 0%, transparent 50%);
    z-index: 0;
  }

.carde {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
    position: relative;
    z-index: 1;
    max-width: 1400px;
    margin: 2rem auto;
    padding: 0 2rem;
}

@media (max-width: 768px) {
  .carde {
    flex-direction: column;
    align-items: center;
      padding: 0 1rem;
  }
}

  .banner {
    gap: 2rem;
    margin-block: 3rem;
 flex-wrap: wrap;
    max-width: 1400px;
    margin: 3rem auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;

    .card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(226, 232, 240, 0.8);
      border-radius: 20px;
flex: 1 1 30%;
max-width: 420px;
min-width: 280px;
      min-height: 280px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(135deg, #FF6B35, #1E3A8A);
        transform: scaleX(0);
        transition: transform 0.4s ease;
      }

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
        border-color: #FF6B35;
      }

      &:hover::before {
        transform: scaleX(1);
      }

      &.card1 {
        background: linear-gradient(135deg, #FF6B35 0%, #ff8c42 100%);
        color: white;
        padding: 2.5rem 2rem;
        position: relative;
        overflow: hidden;

        &::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        h2 {
          color: white;
          font-size: 1.8rem;
          line-height: 1.3;
          font-weight: 700;
          position: relative;
          z-index: 1;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
}

      &.card2 {
    overflow: hidden;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);

        img {
        width: 100%;
        transform: scale(1.02);
          transition: transform 0.3s ease;
        }

        &:hover img {
          transform: scale(1.05);
    }

        .play {
          gap: 1rem;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(30, 58, 138, 0.1) 100%);
          border-radius: 0 0 20px 20px;

          img {
            width: 24px;
            background-color: transparent;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

          h2 {
            font-size: 1.2rem;
            color: #1E3A8A;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
    }
}

      &.card3 {
        padding: 2.5rem 2rem;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);

        h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: #1E3A8A;
          font-weight: 700;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            left: -2rem;
            top: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(135deg, #FF6B35, #1E3A8A);
            border-radius: 2px;
          }
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: #64748B;
          font-weight: 400;
 }
}
 }
}

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media only screen and (max-width: 768px) {
    .hideMD {
        display: none;
    }
}
`;

export const DashboarCarddWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  min-height: 120px;
  max-width: 420px;
  min-width: 280px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #FF6B35, #1E3A8A);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
    border-color: #FF6B35;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &.current {
    background: linear-gradient(135deg, #FF6B35 0%, #ff8c42 100%);
    color: white;
    border-color: #FF6B35;
    box-shadow: 0 12px 40px rgba(255, 107, 53, 0.3);

    .icons {
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .rightBox .header h2 {
    color: white; 
  }

    .rightBox p {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  &.completed {
    background: linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(40, 167, 69, 0.05) 100%);
    border-color: #28a745;

    .icons {
      background: linear-gradient(135deg, #28a745, #20c997);
      border: 2px solid #28a745;
    }
  }

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }
  }

  .icons {
    width: 60px;
    height: 60px;
    min-width: 60px;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid rgba(226, 232, 240, 0.8);
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    img {
      width: 32px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      transition: all 0.3s ease;
    }

    &.active {
      background: linear-gradient(135deg, #FF6B35, #1E3A8A);
      border-color: #FF6B35;
      box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);

      img {
        filter: brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
      }
    }
  }

  .rightBox {
    width: 100%;

    .header {
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
      margin-bottom: 0.5rem;

      h2 {
        font-size: 1.1rem;
        font-weight: 700;
        color: #1E3A8A;
        line-height: 1.3;
        margin: 0;
      }
    }

    p {
      font-size: 0.9rem;
      line-height: 1.5;
      color: #64748B;
      font-weight: 400;
      margin: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-inline: auto;
    padding: 1.5rem;
    
    .icons {
      width: 50px;
      height: 50px;
      min-width: 50px;
      
      img {
        width: 28px;
      }
    }
    
    .rightBox .header h2 {
      font-size: 1rem;
    }
    
    .rightBox p {
      font-size: 0.85rem;
    }
  }
`;