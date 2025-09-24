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
  font-family: var(--font-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-grey-50);
  background-color: var(--color-primary-light);
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  transition: var(--transition-normal);

  &.selected {
    background-color: var(--color-grey-200);
    color: var(--color-primary-dark);
    border: 1px solid transparent;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
    background-color: var(--color-grey-100);
    color: var(--color-grey-100);
  }

  &:hover:not(.selected):not(.disabled) {
    background-color: var(--color-grey-100);
    border-color: var(--color-grey-50);
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
