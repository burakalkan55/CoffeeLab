import './globals.css'
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "CoffeeLab",
  description: "Premium Coffee Experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
