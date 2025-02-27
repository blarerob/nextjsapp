import './styles/globals.css';
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "@/app/providers";

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
          <Providers>
        {children}
          </Providers>
      </main>
      </body>
    </html>
  );
}
