import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandIcon from "./BrandIcon";

const navItems = [
  { label: "Introduction", href: "#intro" },
  { label: "Proposal", href: "#proposal" },
  { label: "Planning", href: "#planning" },
  { label: "Development", href: "#development" },
  { label: "Presentation", href: "#presentation" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 flex w-full items-center justify-between bg-[#FDFDFD] px-6 py-6 md:px-12">
      <a href="#top" className="flex items-center gap-3">
        <BrandIcon />
        <span className="text-xl font-medium tracking-tight text-[#141414]">PostulaPro</span>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="text-sm text-gray-500 transition hover:text-black">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-4 md:flex">
        <a href="https://modoclassproject.netlify.app" className="text-sm text-gray-500 transition hover:text-black">
          MODO
        </a>
        <a
          href="https://schoolpresentation1.netlify.app"
          className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm text-[#141414] transition hover:bg-gray-50"
        >
          View Work
        </a>
      </div>

      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white md:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-y border-black/10 bg-white px-6 py-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-500 transition hover:text-black"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <hr className="my-5 border-black/10" />
          <div className="flex flex-col gap-3">
            <a
              href="https://modoclassproject.netlify.app"
              className="rounded-xl px-4 py-2 text-center text-sm text-gray-500 hover:text-black"
            >
              MODO
            </a>
            <a
              href="https://schoolpresentation1.netlify.app"
              className="rounded-xl bg-[#2563EB] px-4 py-3 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/20"
              onClick={() => setOpen(false)}
            >
              View Work
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
