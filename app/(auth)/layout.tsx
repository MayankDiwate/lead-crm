import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Lead CRM",
  description: "A comprehensive CRM solution for your business",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <div className="flex flex-col justify-center items-center h-screen">
      {children}
    </div>
  );
}
