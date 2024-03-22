import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RRA Group",
  description: "Explore our website to learn more about our logistics services and discover how RRA Group can solve customer problems, address needs, and provide unique benefits. Thank you for choosing RRA Group. We look forward to serving you and being a part of your success story.",
  keywords: "RRA Group, Logistics, One Stop Solution, Best Logistics Services, Best Service, Containers",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    <GoogleAnalytics gaId="G-W80YX2GBGD" />
    </>
  );
}
