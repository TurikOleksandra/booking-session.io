"use client";

import SessionForm from "@/components/bookingForm";
import DesktopHeader from "@/components/headers/DesktopHeader";
import MobileHeader from "@/components/headers/MobileHeader";
import { Main, WrapperMain } from "@/components/style";

export default function Home() {
  return (
    <WrapperMain>
      <MobileHeader
        sessionName="Cool Session"
        additionalType="Additional type"
        duration="30 min"
      />
      <DesktopHeader title="6037 Venture Partnership" />
      <Main>
        <SessionForm
          headerTitle="Book a Session"
          subTitle="Choose a date and time that is convenient for you to e-meet your stylist"
        />
      </Main>
    </WrapperMain>
  );
}
