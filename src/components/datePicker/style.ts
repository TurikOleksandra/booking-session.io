import { styled } from "styled-components";

export const DateItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 1.5rem;
  min-width: 3.5rem;

  @media (min-width: 768px) {
    min-width: 4rem;
  }
`;

export const MonthLabel = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
  position: absolute;
  top: 0;
`;

export const DateItem = styled.div`
  font-family: var(--font-poppins), sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4.5rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 0.8125rem;
  color: #16171b;
  transition: all 0.2s ease-in-out;

  &.selected {
    background-color: #fef2f8;
    color: #de3a6b;
    border: 1px solid transparent;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
    background-color: #f9fafb;
    color: #9ca3af;
  }

  &:hover:not(.selected):not(.disabled) {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }

  @media (max-width: 425px) {
    width: 3.5rem;
    height: 4rem;
  }
`;

export const DayOfWeek = styled.div`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

export const DayOfMonth = styled.div`
  font-size: 1.125rem;
`;