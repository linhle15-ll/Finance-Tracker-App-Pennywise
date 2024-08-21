import { Poppins } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css";
import "./expense-income-mainBoard.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "PennyWise",
  description: "An app to help you manage your finances.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
