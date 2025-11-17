import { Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">

        {/* LOGO */}
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
  <span>☕</span>
  <span className="font-extrabold bg-gradient-to-r from-black to-amber-700 bg-clip-text text-transparent">
    CoffeeLab
  </span>
</h2>


        {/* SOCIAL ICONS ONLY */}
        <div className="flex gap-5 text-gray-600 mt-4 md:mt-0">
          <a href="#" className="hover:text-amber-700 transition">
            <Instagram size={26} />
          </a>
          <a href="#" className="hover:text-amber-700 transition">
            <Twitter size={26} />
          </a>
          <a href="#" className="hover:text-amber-700 transition">
            <Youtube size={26} />
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CoffeeLab. All rights reserved.
      </div>
    </footer>
  );
}
