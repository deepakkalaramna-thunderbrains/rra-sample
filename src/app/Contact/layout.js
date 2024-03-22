import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact Us | RRA Group",
  description: "Welcome to our Contact Us page! At RRA Group, we value your feedback, questions, and inquiries. Whether you're a customer, partner, or simply interested in learning more about our products/services, we're here to assist you every step of the way.",
  keywords: "Contact Us, Meet Us, Contact, Reach Out, RRA Group Contact Us, Mail Us, Find Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
