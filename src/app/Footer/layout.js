import { Inter } from "next/font/google";
import styles from "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RRA Group Footer",
  description: "Generated by create next app",
};

export default function FootersLayout({ children }) {
  return (
    <>
      <footer className={styles.footer}>
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
      </footer>
    </>
  );
}