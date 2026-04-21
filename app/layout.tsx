import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise Clone",
  description: "Next-Gen Expertise for Your Enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}