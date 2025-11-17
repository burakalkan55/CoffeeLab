"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect → navbar shadow + blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all
        ${scrolled ? "bg-white/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
  <span>☕</span>
  <span className="font-extrabold bg-gradient-to-r from-black to-amber-700 bg-clip-text text-transparent">
    CoffeeLab
  </span>
</h2>

        </Link>

        {/* MENU (Desktop) */}
        <div className="hidden md:flex gap-10 text-gray-700 font-medium">
          <Link href="#coffees" className="hover:text-amber-700 transition">Coffees</Link>
          <Link href="#about" className="hover:text-amber-700 transition">About</Link>
          <Link href="#contact" className="hover:text-amber-700 transition">Contact</Link>
        </div>

        {/* Right Button */}
        <div className="hidden md:block">
          <Button className="bg-amber-700 hover:bg-amber-800 text-white rounded-xl px-5">
            Order Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700">
          <Link href="#coffees" onClick={() => setOpen(false)}>
            Coffees
          </Link>
          <Link href="#about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Button className="bg-amber-700 text-white rounded-xl">
            Order Now
          </Button>
        </div>
      )}
    </nav>
  );
}
