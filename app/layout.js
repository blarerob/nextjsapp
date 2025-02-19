import './styles/globals.css';
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ weight: ["400", "700"], subsets:  ["latin"] });

export const metadata = {
  title: "New Landings Homes",
  description: "Lets learn baby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
      <Navbar />
      <main className="p-20 max-w-6xl mx-auto">
        {children}
      </main>
      </body>
    </html>
  );
}
