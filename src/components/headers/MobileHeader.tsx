import React from "react";
import Image from "next/image";
import {
  CircleOverlay,
  Content,
  DurationBadge,
  HeaderBackground,
  HeaderContainer,
  HeaderImage,
  StyledImage,
  Subtitle,
  Title,
} from "./style";

interface MobileHeaderProps {
  sessionName: string;
  additionalType: string;
  duration: string;
  imageUrl?: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  sessionName,
  additionalType,
  duration,
  imageUrl = "/images/mobileFashion.png",
}) => {
  return (
    <HeaderContainer>
      <HeaderBackground />
      <CircleOverlay />
      <HeaderImage>
        <Image
          src={imageUrl}
          alt=""
          width={180}
          height={270}
          style={{ objectFit: "cover" }}
          priority
        />
      </HeaderImage>
      <Content>
        <Title>{sessionName}</Title>
        <Subtitle>{additionalType}</Subtitle>
        <DurationBadge>
          <StyledImage
            src="/icons/clock.svg"
            alt="Duration"
            width={20}
            height={20}
          />
          {duration}
        </DurationBadge>
      </Content>
    </HeaderContainer>
  );
};

export default MobileHeader;
