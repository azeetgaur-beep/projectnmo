import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import manaLogo from "@/imports/mymana_logo.png";

const NAV_LINKS = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-20 py-3">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link to="/" className="flex items-center">
            <ImageWithFallback
              src={manaLogo}
              alt="MANA logo"
              className="h-9 w-auto object-contain"
            />
            <span className="ml-2.5 font-serif font-bold text-2xl tracking-tight text-primary">Mana</span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden sm:flex flex-1 items-center justify-center gap-6 lg:gap-10">
          
          {/* Products Dropdown */}
          <div className="relative group py-6">
            <button className={`text-sm font-semibold transition-colors flex items-center gap-1.5 focus:outline-none ${currentPath === '/freelancers' || currentPath === '/ofws' || currentPath === '/card' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
              Products
              <ChevronDown size={14} className="opacity-40 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-48 bg-white border border-border shadow-lg rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 flex flex-col z-50">
              <Link to="/freelancers" className={`px-5 py-2.5 text-[13px] font-medium transition-colors ${currentPath === '/freelancers' ? 'text-accent bg-muted/30' : 'text-foreground hover:bg-muted/50 hover:text-accent'}`}>
                For Freelancers
              </Link>
              <Link to="/ofws" className={`px-5 py-2.5 text-[13px] font-medium transition-colors ${currentPath === '/ofws' ? 'text-accent bg-muted/30' : 'text-foreground hover:bg-muted/50 hover:text-accent'}`}>
                For OFWs
              </Link>
              <Link to="/card" className={`px-5 py-2.5 text-[13px] font-medium transition-colors ${currentPath === '/card' ? 'text-accent bg-muted/30' : 'text-foreground hover:bg-muted/50 hover:text-accent'}`}>
                The Mana Card
              </Link>
            </div>
          </div>

          <Link to="/about" className={`text-sm font-semibold transition-colors ${currentPath === '/about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            About
          </Link>
          <Link to="/blog" className={`text-sm font-semibold transition-colors ${currentPath.startsWith('/blog') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            Blog
          </Link>
        </div>

        {/* Right: CTA & Mobile Menu */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <Link to="/#waitlist" className="hidden sm:inline-flex bg-foreground text-background font-bold text-sm px-7 py-2.5 rounded-full hover:bg-foreground/90 transition-all shadow-sm">
            Join the waitlist
          </Link>
          <button className="sm:hidden p-3 -mr-3 text-foreground hover:bg-muted rounded-xl transition-colors active:bg-muted/80" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-background px-6 py-4 flex flex-col">
          {NAV_LINKS.map((l) => (
            <Link 
              key={l.label} 
              to={l.href} 
              className={`text-lg font-semibold py-4 border-b border-border/50 last:border-0 ${
                currentPath === l.href || (l.href.startsWith('/blog') && currentPath.startsWith('/blog')) ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/#waitlist" className="mt-6 bg-foreground text-background font-bold text-base px-6 py-4 rounded-full text-center active:bg-foreground/90 transition-all shadow-sm" onClick={() => setMenuOpen(false)}>
            Join the waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
