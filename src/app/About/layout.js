import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About Us | RRA Group",
  description: "Welcome to RRA Group, where innovation meets excellence. Our journey began with a vision to redefine the standards of logistics, and today, we stand proud as a leading logistics company committed to delivering exceptional quality and service.",
  keywords: "About Us, Who We Are, Logistics, Know More About Us, Reach Out"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
