import "./globals.css";
import { Urbanist } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
// NOTE: make sure CustomCursor.tsx (the dot+ring component from earlier)
// actually exists at components/ui/CustomCursor.tsx

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
    <html lang="en" className={urbanist.variable} suppressHydrationWarning>
      <body
        className="font-urbanist antialiased bg-[#F6F4F2] cursor-none"
        suppressHydrationWarning
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
