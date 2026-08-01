import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-6 max-w-7xl mx-auto">
      <Link to="/" className="flex items-center gap-2">
        <div className="size-8 bg-brand-pink rounded-full" />
        <span className="font-serif italic text-xl font-bold tracking-tight text-dusty-rose">
          Pink Care.
        </span>
      </Link>
      <div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-widest text-dusty-rose/70">
        <a href="#mission" className="hover:text-brand-pink transition-colors">
          The Mission
        </a>
        <a href="#token" className="hover:text-brand-pink transition-colors">
          $PCAT Token
        </a>
        <a href="#ecosystem" className="hover:text-brand-pink transition-colors">
          Ecosystem
        </a>
      </div>
      <a
        href="#get-involved"
        className="px-6 py-2.5 bg-brand-pink text-white rounded-full text-sm font-semibold hover:bg-dusty-rose transition-all shadow-lg shadow-brand-pink/20"
      >
        Get Involved
      </a>
    </nav>
  );
}
