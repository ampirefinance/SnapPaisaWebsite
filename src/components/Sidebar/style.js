import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 232px;
  min-width: 232px;
  position: absolute;
  top: 160px;
  left: 20px;
  margin-top: -140px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  z-index: 11;
  bottom: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    li {
      background: rgba(248, 250, 252, 0.8);
      border: 1px solid rgba(226, 232, 240, 0.6);
      border-radius: 12px;
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: flex-start;
      height: 48px;
      padding: 0 16px;
      color: #64748B;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: 100%;
      box-sizing: border-box;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(135deg, #FF6B35, #1E3A8A);
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.95);
        border-color: #FF6B35;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
        color: #1E3A8A;
      }

      &:hover::before {
        transform: scaleX(1);
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 20px;
      }

      span {
        display: block;
        font-size: 14px;
        font-weight: 600;
        width: 100%;
        visibility: visible;
        opacity: 1;
        white-space: nowrap;
        transition: all 0.3s ease;
        text-align: left;
        line-height: 1.2;
      }

      img {
        width: 20px;
        height: 20px;
        min-width: 20px;
        filter: brightness(0) saturate(100%) invert(40%) sepia(10%) saturate(1000%) hue-rotate(200deg) brightness(0.8) contrast(0.8);
        transition: all 0.3s ease;
      }

      &:hover img {
        filter: brightness(0) saturate(100%) invert(25%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(0.8) contrast(1);
      }

      &.active {
        background: linear-gradient(135deg, #FF6B35 0%, #ff8c42 100%);
        color: white;
        border-color: #FF6B35;
        box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
        transform: translateY(-2px);

        &::before {
          transform: scaleX(1);
        }

        img {
          filter: brightness(0) invert(1);
        }

        span {
          color: white;
          font-weight: 700;
        }
      }
    }
  }

  &.close {
    min-width: 80px;
    width: 80px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 2rem 0.5rem;

    ul {
      gap: 8px;

      li {
        justify-content: center;
        padding: 0 8px;
        width: 100%;

        span {
          visibility: hidden;
          opacity: 0;
          display: none;
        }

        img {
          width: 24px;
          height: 24px;
          min-width: 24px;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      min-width: 232px;
      width: 232px;
      left: -244px;
      overflow: hidden;
      padding: 2rem 1.5rem;

      ul {
        gap: 8px;

        li {
          justify-content: start;
          padding: 0 16px;
          width: 100%;

          span {
            display: block;
            visibility: visible;
            opacity: 1;
          }

          img {
            width: 20px;
            height: 20px;
            min-width: 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    left: 10px;
    top: 160px;
    bottom: 10px;
  }
`;