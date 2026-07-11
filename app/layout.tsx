import "./globals.css";
import { Urbanist } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Yasir Abed Rabbu | Product Designer",
  description: "UI/UX Designer & Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="font-urbanist antialiased bg-[#F6F4F2]" suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}