import { styled } from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  background-color: var(--color-primary-light);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: var(--transition-normal);

  @media (max-width: 425px) {
    min-height: calc(100vh - 260px);
    position: fixed;
    bottom: 0;
    right: 0;
    max-width: 100%;
    margin: 0;
    padding: var(--spacing-xl) var(--spacing-lg);
    overflow-y: auto;
    z-index: 10;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  }
`;

export const Header = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: var(--color-primary);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-family: "Kaisei Tokumin", serif;
`;

export const SubTitle = styled.p`
  color: #8f91a1;
  font-weight: 400;
  font-size: 1rem;
  font-family: var(--font-poppins), sans-serif;
`;

export const StylistBlock = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  padding: 40px 45px 0 40px;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const StylistAvatar = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
export const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const ConfirmButton = styled.button<{ $enabled: boolean }>`
  margin-top: 2rem;
  width: 100%;
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: var(--font-size-md);
  background-color: ${({ $enabled }) =>
    $enabled ? "var(--color-primary)" : "var(--color-grey-50)"};
  color: ${({ $enabled }) =>
    $enabled ? "var(--color-primary-light)" : "var(--color-grey-100)"};
  border: none;
  cursor: ${({ $enabled }) => ($enabled ? "pointer" : "not-allowed")};
  transition: var(--transition-normal);
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;
export const ButtonWrapper = styled.div`
  padding: 0 70px 40px 40px;
  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
  }
`;
