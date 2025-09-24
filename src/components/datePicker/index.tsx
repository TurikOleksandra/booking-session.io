"use client";

import React, { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { getNextSixWeeksDates } from "@/utils/date";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import {
  Wrapper,
  Container,
  ScrollContainer,
  Grid,
  ArrowButton,
} from "../style";
import {
  DateItem,
  DateItemWrapper,
  DayOfMonth,
  DayOfWeek,
  MonthLabel,
} from "./style";

interface DatePickerProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onSelect }) => {
  const { gridRef, canScrollLeft, scroll } = useHorizontalScroll();
  const dates = useMemo(() => getNextSixWeeksDates(), []);
  const handleScroll = useCallback(
    (direction: "left" | "right") => {
      scroll(direction);
    },
    [scroll]
  );
  let lastMonth = "";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Wrapper role="group" aria-label="Date picker">
      <ArrowButton
        onClick={() => handleScroll("left")}
        disabled={!canScrollLeft}
      >
        <Image
          src="/icons/arrowLeft.svg"
          alt="Previous"
          width={24}
          height={24}
        />
      </ArrowButton>
      <Container>
        <ScrollContainer>
          <Grid ref={gridRef}>
            {dates.map((date) => {
              const isSelected =
                selectedDate?.toDateString() === date.toDateString();
              const isDisabled = date.getTime() < today.getTime();
              const month = format(date, "MMM");
              const showMonthLabel = month !== lastMonth;
              lastMonth = month;

              return (
                <DateItemWrapper key={date.toISOString()}>
                  {showMonthLabel && <MonthLabel>{month}</MonthLabel>}
                  <DateItem
                    onClick={() => !isDisabled && onSelect(date)}
                    className={`${isSelected ? "selected" : ""} ${
                      isDisabled ? "disabled" : ""
                    }`}
                  >
                    <DayOfWeek>{format(date, "EEE")}</DayOfWeek>
                    <DayOfMonth>{format(date, "d")}</DayOfMonth>
                  </DateItem>
                </DateItemWrapper>
              );
            })}
          </Grid>
        </ScrollContainer>
      </Container>
      <ArrowButton onClick={() => scroll("right")}>
        <Image src="/icons/arrowRight.svg" alt="Next" width={24} height={24} />
      </ArrowButton>
    </Wrapper>
  );
};

export default DatePicker;
