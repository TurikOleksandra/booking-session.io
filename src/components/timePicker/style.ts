import { styled } from "styled-components";

export const TimeButton = styled.button<{ selected: boolean }>`
  font-family: var(--font-primary);
  flex-shrink: 0;
  width: 5rem;
  padding: var(--spacing-md) 0;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-grey-50);
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  cursor: pointer;
  transition: var(--transition-fast);

  &.selected {
    background-color: var(--color-grey-200);
    color: var(--color-primary-dark);
    border: none;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
    background-color: var(--color-grey-50);
    color: var(--color-grey-100);
  }

  &:hover:not(.selected):not(.disabled) {
    background-color: var(--color-grey-100);
    border-color: var(--color-grey-100);
  }
`;
