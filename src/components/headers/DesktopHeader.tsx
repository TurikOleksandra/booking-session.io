import React from "react";
import { HeaderDesktop } from "./style";

interface DesktopHeaderProps {
  title: string;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ title }) => {
  return <HeaderDesktop>{title}</HeaderDesktop>;
};

export default DesktopHeader;
