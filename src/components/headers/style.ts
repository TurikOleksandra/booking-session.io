import { styled } from "styled-components";
import Image from "next/image";

export const Header = styled.header`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 100%;
    padding: 1.5rem;
    font-size: 1.375rem;
    font-weight: 600;
    text-align: start;
    color: white;
    background: linear-gradient(
      90deg,
      #b87518 0%,
      #ad6b0c 25%,
      #b67110 50%,
      #b4720e 75%,
      #b4720e 100%
    );
    padding-left: 8.4375rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0;
  margin-bottom: 24px;
  color: white;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #aa580d, #e28f11);
  min-height: 280px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    transform: translate(30%, -30%);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  padding: 60px 24px 40px;
  position: relative;
  z-index: 2;
`;

export const Title = styled.h1`
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  margin: 0 0 8px 0;
  color: white;
  line-height: 1.1;
  max-width: 60%;
`;

export const Subtitle = styled.div`
  font-family: var(--font-poppins);
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 32px;
  color: white;
  max-width: 60%;
`;

export const DurationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 0.8125rem;
  color: white;
  font-weight: 400;
  font-family: var(--font-poppins), sans-serif;
`;

export const StyledImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const CircleOverlay = styled.div`
  position: absolute;
  right: -80px;
  bottom: -80px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 3px solid #ffaf2a;
  background: #ad5705;
  z-index: 1;
`;

export const HeaderImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 180px;
  height: 270px;
  overflow: hidden;
  z-index: 1;

  img {
    width: 180px;
    height: 290px;
    object-fit: cover;
    object-position: center;
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
`;

export const HeaderDesktop = styled.header`
  display: none;

  @media (min-width: 768px) {
    font-family: var(--font-poppins), sans-serif;
    display: block;
    width: 100%;
    padding: 1.5rem;
    font-size: 1.375rem;
    font-weight: 600;
    text-align: start;
    color: white;
    background: linear-gradient(
      90deg,
      #b87518 0%,
      #ad6b0c 25%,
      #b67110 50%,
      #b4720e 75%,
      #b4720e 100%
    );
    padding-left: 8.4375rem;
  }
`;
