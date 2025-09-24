import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
`;

export const Container = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ScrollContainer = styled.div`
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Grid = styled.div`
  display: inline-flex;
  gap: var(--spacing-md);
  scroll-behavior: smooth;
  width: max-content;
  padding: var(--spacing-xs) 0;
`;

export const ArrowButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(--spacing-xxl);
    height: var(--spacing-xxl);
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: var(--transition-normal);

    &:active:not(:disabled) {
      transform: scale(0.95);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (max-width: 425px) {
      width: var(--spacing-xl);
      height: var(--spacing-xl);

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export const WrapperMain = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #aa580d, #e28f11);
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 1rem;

  @media (min-width: 768px) {
    flex: 1;
  }
`;