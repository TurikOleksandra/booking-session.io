import React, { useState } from "react";
import DatePicker from "../datePicker";
import TimePicker from "../timePicker";
import { parseDateTimeToTimestamp } from "@/utils/date";
import {
  ButtonWrapper,
  ConfirmButton,
  ContentWrapper,
  FormContainer,
  Header,
  StylistAvatar,
  StylistBlock,
  SubTitle,
  WrapperText,
} from "./style";

interface SessionFormProps {
  headerTitle: string;
  subTitle?: string;
}

const SessionForm: React.FC<SessionFormProps> = ({ headerTitle, subTitle }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const isEnabled = !!selectedDate && !!selectedTime;

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      try {
        const { timestamp, formattedDate } = parseDateTimeToTimestamp(
          selectedDate,
          selectedTime
        );

        console.log({ timestamp });
        alert(`Booked for ${formattedDate}`);
      } catch (error) {
        console.error("Error details:", {
          selectedDate,
          selectedTime,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }
  };

  return (
    <>
      <FormContainer>
        <ContentWrapper>
          <StylistBlock>
            <StylistAvatar src="images/fashion.png" alt="Stylist Avatar" />
            <WrapperText>
              <Header>{headerTitle}</Header>
              {subTitle && <SubTitle>{subTitle}</SubTitle>}
            </WrapperText>
          </StylistBlock>

          <div style={{ marginTop: "1.5rem" }}>
            <DatePicker
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
          {selectedDate && (
            <div style={{ marginTop: "1.5rem" }}>
              <TimePicker
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSelect={setSelectedTime}
              />
            </div>
          )}
          <ButtonWrapper>
            <ConfirmButton $enabled={isEnabled} onClick={handleConfirm}>
              Confirm
            </ConfirmButton>
          </ButtonWrapper>
        </ContentWrapper>
      </FormContainer>
    </>
  );
};

export default SessionForm;
