import { ThemeProvider } from "@/components/providers/theme-provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "../components/providers/provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lead CRM",
  description: "A comprehensive CRM solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ReduxProvider>
            {children}
            <Toaster position="top-center" reverseOrder={false} />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
