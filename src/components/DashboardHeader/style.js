import styled from "styled-components";

export const HeaderWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px 24px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
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

  &:hover::before {
    transform: scaleX(1);
  }

  .left {
    align-items: center;
    gap: 20px;
    margin-left: 10px;

    .badgeIcon {
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.3s ease;
      background: rgba(255, 107, 53, 0.1);
      border: 1px solid rgba(255, 107, 53, 0.2);

      &:hover {
        background: rgba(255, 107, 53, 0.2);
        transform: scale(1.05);
      }

      img {
        width: 20px;
        filter: brightness(0) saturate(100%) invert(25%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(0.8) contrast(1);
      }
    }

    .logo {
      max-width: 260px;
      transition: all 0.3s ease;

      img {
        width: 80%;
        min-width: 80px;
        margin-left: 20px;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        transition: all 0.3s ease;

        &.sm {
          display: none;
        }

        @media only screen and (max-width: 500px) {
          width: 80px;
          
          &.sm {
            display: block;
          }
          
          &.xl {
            display: none;
          }
        }
      }

      &:hover img {
        transform: scale(1.02);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
      }
    }
  }

  .right {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(226, 232, 240, 0.8);
    border-radius: 16px;
    align-items: center;
    align-self: center;
    gap: 12px;
    padding: 12px 20px;
    color: #1E3A8A;
    font-size: 15px;
    height: 56px;
    font-weight: 600;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

    &:hover {
      background: rgba(255, 255, 255, 0.95);
      border-color: #FF6B35;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
    }

    .name {
      white-space: nowrap;
      font-weight: 700;
      color: #1E3A8A;
    }

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
      overflow: hidden;
      display: flex;
      border: 2px solid rgba(226, 232, 240, 0.8);
      transition: all 0.3s ease;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
      }
    }

    &:hover .icon {
      border-color: #FF6B35;
      box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 16px 20px;
    
    .left {
      gap: 12px;
      
      .badgeIcon {
        margin-left: 5px;
        
        img {
          width: 18px;
        }
      }
    }
  }
`;