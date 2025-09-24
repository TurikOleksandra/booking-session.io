import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "../styles/globals.css";
import GlobalStyle from "@/styles/GlobalStyle";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Booking Session",
  description: "Book your session with ease",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <GlobalStyle />
        <StyledComponentsRegistry> {children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
