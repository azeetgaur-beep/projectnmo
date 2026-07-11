import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import manaLogo from "@/imports/mymana_logo.png";
import { AnchorLink } from "./AnchorLink";

const PRODUCT_LINKS = [
  { label: "All products", href: "/#products" },
  { label: "For Freelancers", href: "/freelancers" },
  { label: "For OFWs", href: "/ofws" },
  { label: "The Mana Card", href: "/card" },
];

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function isLinkActive(href: string, currentPath: string) {
  if (href.includes("#")) {
    const [path] = href.split("#");
    return path === currentPath || (path === "/" && currentPath === "/");
  }
  return currentPath === href || (href.startsWith("/blog") && currentPath.startsWith("/blog"));
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isProductActive = PRODUCT_LINKS.some((link) => isLinkActive(link.href, currentPath));

  const renderNavItem = (href: string, label: string, className: string, onNavigate?: () => void) => {
    if (href.includes("#")) {
      return (
        <AnchorLink to={href} className={className} onClick={onNavigate}>
          {label}
        </AnchorLink>
      );
    }

    return (
      <Link to={href} className={className} onClick={onNavigate}>
        {label}
      </Link>
    );
  };

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-20 py-3">
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className="flex items-center" aria-label="Mana home">
              <img
                src={manaLogo}
                alt=""
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <span className="ml-2.5 font-serif font-bold text-2xl tracking-tight text-primary">
                Mana
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex flex-1 items-center justify-center gap-6 lg:gap-10">
            <div className="relative group py-6">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isProductActive}
                className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  isProductActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Products
                <ChevronDown
                  size={14}
                  className="opacity-40 group-hover:rotate-180 transition-transform"
                  aria-hidden="true"
                />
              </button>
              <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-48 bg-white border border-border shadow-lg rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 flex flex-col z-50 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
                {PRODUCT_LINKS.map((link) =>
                  renderNavItem(
                    link.href,
                    link.label,
                    `px-5 py-2.5 text-[13px] font-medium transition-colors ${
                      isLinkActive(link.href, currentPath)
                        ? "text-accent bg-muted/30"
                        : "text-foreground hover:bg-muted/50 hover:text-accent"
                    }`
                  )
                )}
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isLinkActive(link.href, currentPath)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex items-center justify-end gap-4">
            <AnchorLink
              to="/#waitlist"
              className="hidden sm:inline-flex bg-foreground text-background font-bold text-sm px-7 py-2.5 rounded-full hover:bg-foreground/90 transition-all shadow-sm"
            >
              Join the waitlist
            </AnchorLink>
            <button
              type="button"
              className="sm:hidden p-3 -mr-3 text-foreground hover:bg-muted rounded-xl transition-colors active:bg-muted/80"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-nav"
            className="sm:hidden border-t border-border bg-background px-6 py-4 flex flex-col"
          >
            <button
              type="button"
              className="text-lg font-semibold py-4 border-b border-border/50 flex items-center justify-between text-left"
              onClick={() => setProductsOpen(!productsOpen)}
              aria-expanded={productsOpen}
            >
              Products
              <ChevronDown
                size={18}
                className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {productsOpen && (
              <div className="flex flex-col pl-4 border-b border-border/50 pb-2">
                {PRODUCT_LINKS.map((link) =>
                  renderNavItem(
                    link.href,
                    link.label,
                    `text-base font-medium py-3 ${
                      isLinkActive(link.href, currentPath) ? "text-foreground" : "text-muted-foreground"
                    }`,
                    () => setMenuOpen(false)
                  )
                )}
              </div>
            )}

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-lg font-semibold py-4 border-b border-border/50 last:border-0 ${
                  isLinkActive(link.href, currentPath)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <AnchorLink
              to="/#waitlist"
              className="mt-6 bg-foreground text-background font-bold text-base px-6 py-4 rounded-full text-center active:bg-foreground/90 transition-all shadow-sm"
              onClick={() => setMenuOpen(false)}
            >
              Join the waitlist
            </AnchorLink>
          </div>
        )}
      </nav>
    </header>
  );
}
