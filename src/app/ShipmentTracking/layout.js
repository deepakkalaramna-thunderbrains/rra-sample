import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shipment Tracking | RRA Group",
  description: "Our Shipment Tracking functionality provides a seamless solution for tracking the status and location of shipments in real-time. With intuitive design and robust functionality, users can easily monitor the progress of their shipments from origin to destination.",
  keywords: "Shipment Tracking, Real Time Tracking, Tracking, Where Is My Order, Track, Find Order",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
