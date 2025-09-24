import React, { useCallback } from "react";
import { getAvailableTimes } from "@/utils/date";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import Image from "next/image";
import {
  Wrapper,
  Container,
  ScrollContainer,
  Grid,
  ArrowButton,
} from "../style";
import { TimeButton } from "./style";

interface TimePickerProps {
  selectedDate: Date;
  selectedTime: string | null;
  onSelect: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  selectedDate,
  selectedTime,
  onSelect,
}) => {
  const times = getAvailableTimes(selectedDate);
  const { gridRef, canScrollLeft, canScrollRight, scroll } =
    useHorizontalScroll();

  const handleScroll = useCallback(
    (direction: "left" | "right") => {
      scroll(direction);
    },
    [scroll]
  );

  const handleTimeSelect = useCallback(
    (time: string, isDisabled: boolean) => {
      if (!isDisabled) {
        onSelect(time);
      }
    },
    [onSelect]
  );

  return (
    <Wrapper>
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
            {times.map((time) => {
              const isSelected = selectedTime === time;
              const isDisabled = false;

              return (
                <TimeButton
                  key={time}
                  selected={isSelected}
                  onClick={() => handleTimeSelect(time, isDisabled)}
                  className={`${isSelected ? "selected" : ""} ${
                    isDisabled ? "disabled" : ""
                  }`}
                >
                  {time}
                </TimeButton>
              );
            })}
          </Grid>
        </ScrollContainer>
      </Container>
      <ArrowButton onClick={() => scroll("right")} disabled={!canScrollRight}>
        <Image src="/icons/arrowRight.svg" alt="Next" width={24} height={24} />
      </ArrowButton>
    </Wrapper>
  );
};

export default TimePicker;
