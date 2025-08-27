import React, { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import vedio from "./images/vedio1.mp4";
import logo from "./images/logo.png";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll-area",
    href: "/docs/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/tabs",
    description:
      "A set of layered sections of content displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/tooltip",
    description:
      "A popup that displays information related to an element when hovered.",
  },
];

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 rounded-md text-white/90 hover:text-white transition">
        {label}
        <ChevronDown size={16} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 w-72 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-xl p-3 z-50">
          {children}
        </div>
      )}
    </div>
  );
}

function ListItem({ title, href, children }) {
  return (
    <a
      href={href}
      className="block rounded-lg p-3 transition bg-white/5 hover:bg-white/15 hover:scale-[1.02] text-white"
    >
      <div className="text-sm font-medium">{title}</div>
      <p className="text-xs text-white/70">{children}</p>
    </a>
  );
}

export default function RollsRoyceStyleHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 👇 search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // search filter
  const filteredResults = components.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={vedio} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 px-4 md:px-6 py-4 flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide z-20">
        {/* Left Section */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center space-x-1 md:hidden text-white/90 hover:text-white"
          >
            <Menu className="h-5 w-5" />
            <span className="text-sm">MENU</span>
          </button>

          {/* Black Badge link (desktop only) */}
          <a
            href="#"
            className="hidden md:block cursor-pointer text-white/90 hover:text-white"
          >
            BLACK BADGE
          </a>
        </div>

        {/* Center Logo */}
        <div>
          <a href="#">
            <img src={logo} alt="Rolls Royce" className="h-7 sm:h-9 mx-auto" />
          </a>
        </div>

        {/* Right Section (Search + Dealer) */}
        <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer text-white/90 hover:text-white">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center gap-1"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:block">FIND A DEALER</span>
          </button>
        </div>
      </header>

      {/* 🔍 Search Bar Animation */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[40%] z-30"
          >
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dealers or components..."
              className="w-full px-4 py-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
            />

            {/* Live Search Results */}
            {query && (
              <div className="mt-2 bg-black/70 backdrop-blur-md rounded-xl border border-white/20 p-3 text-sm text-white space-y-2 max-h-64 overflow-y-auto">
                {filteredResults.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    className="block p-2 rounded-lg hover:bg-white/10 transition"
                  >
                    <div className="font-medium">{c.title}</div>
                    <div className="text-xs text-white/70">{c.description}</div>
                  </a>
                ))}

                {/* If nothing found */}
                {filteredResults.length === 0 && (
                  <p className="text-white/50">No results found.</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="absolute top-16 sm:top-20 w-full hidden md:flex justify-center px-4 py-2 sm:py-3">
        <div className="flex gap-4 lg:gap-6 flex-wrap justify-center">
          <Dropdown label="Discover">
            <div className="space-y-2">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </div>
          </Dropdown>

          {[
            "Spectre",
            "Ghost Series II",
            "Cullinan Series II",
            "Commission",
            "Enquire",
          ].map((menu) => (
            <Dropdown key={menu} label={menu}>
              <div className="grid grid-cols-1 gap-2">
                {components.map((c) => (
                  <ListItem key={c.title} href={c.href} title={c.title}>
                    {c.description}
                  </ListItem>
                ))}
              </div>
            </Dropdown>
          ))}
        </div>
      </nav>

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/70 z-30 flex">
          <div className="bg-black/90 backdrop-blur-xl w-64 max-w-[80%] p-6 space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 mb-6 text-white/80 hover:text-white"
            >
              <X className="h-6 w-6" />
              <span>Close</span>
            </button>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-4 text-base sm:text-lg">
              {[
                "Discover",
                "Spectre",
                "Ghost Series II",
                "Cullinan Series II",
                "Commission",
                "Enquire",
              ].map((item) => (
                <a
                  key={item}
                  className="text-white/80 hover:text-white"
                  href="#"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}

      {/* Center Text */}
      <div className="flex items-center justify-center min-h-screen z-20 px-2 sm:px-4 text-center pt-[30%] sm:pt-[18%]">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] flex flex-wrap items-center justify-center gap-2">
          <span>BLACK</span>
          <span className="text-4xl sm:text-5xl md:text-7xl">&infin;</span>
          <span>BADGE</span>
        </h1>
      </div>
    </div>
  );
}
