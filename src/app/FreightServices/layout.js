import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Freight Services | RRA Group",
  description: "Welcome to our Freight Services page! At RRA Group, we specialize in providing reliable and efficient freight transportation solutions tailored to meet your business needs. Whether you're shipping goods locally or internationally, we're here to simplify the logistics process and ensure your cargo reaches its destination safely and on time.",
  keywords: "Freight Services, Services, Logistics, Get Services, Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
