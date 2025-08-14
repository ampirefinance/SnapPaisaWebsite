import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  margin: 0 auto 2rem auto;
  max-width: 1400px;
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

  & > .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(226, 232, 240, 0.6);
    border-radius: 16px;
    padding: 2rem;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
      border-color: #FF6B35;
    }

    h2 {
      font-size: 1.5rem;
      color: #1E3A8A;
      white-space: nowrap;
      margin: 0;
      font-weight: 700;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: -1rem;
        top: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(135deg, #FF6B35, #1E3A8A);
        border-radius: 2px;
      }
    }

    & > div:last-child {
      flex: 1;
      min-width: 200px;
    }
  }

  p {
    font-size: 1rem;
    text-align: center;
    color: #64748B;
    padding: 1.5rem 0 0;
    line-height: 1.6;
    font-weight: 400;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;

    p {
      font-size: 0.9rem;
      line-height: 1.5;
    }

    & > .flex {
      flex-direction: column;
      align-items: flex-start;
      padding: 1.5rem;
      gap: 1.5rem;

      h2 {
        font-size: 1.3rem;
        white-space: normal;
      }
    }
  }
`;

export const ProgressBoxWrapper = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 25px;
  overflow: hidden;
  height: 30px;
  position: relative;
  border: 2px solid rgba(226, 232, 240, 0.8);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  .progress-bar {
    height: 100%;
    width: 0;
    text-align: center;
    line-height: 30px;
    color: white;
    font-weight: 700;
    white-space: nowrap;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    background: linear-gradient(135deg, #FF6B35 0%, #ff8c42 100%);
    border-radius: 25px;
    box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 2s infinite;
    }
  }

  &:hover .progress-bar {
    background: linear-gradient(135deg, #ff8c42 0%, #FF6B35 100%);
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
  }

  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }

    .progress-container {
  display: flex;
  align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    height: 25px;

    .progress-bar {
      line-height: 25px;
      font-size: 0.9rem;
    }

  .progress-container {
    flex-direction: column;
    align-items: flex-start;
  }
  }
`;
