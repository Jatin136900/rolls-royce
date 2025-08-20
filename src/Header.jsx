import React, { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import vedio from "./images/vedio1.mp4"
import logo from "./images/logo.png"

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
      <header className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center justify-between text-sm font-semibold tracking-wide z-20">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center space-x-2 md:hidden text-white/90 hover:text-white"
          >
            <Menu className="h-6 w-6" />
            <span>MENU</span>
          </button>

          {/* Black Badge link (desktop only) */}
          <a href="#" className="hidden md:block cursor-pointer text-white/90 hover:text-white">
            BLACK BADGE
          </a>
        </div>

        {/* Center Logo */}
        <div>
          <a href="#">
            <img
              src={logo}
              alt="Rolls Royce"
              className="h-8 mx-auto"
            />
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 cursor-pointer text-white/90 hover:text-white">
          <Search className="h-4 w-4" />
          <a href="#">FIND A DEALER</a>
        </div>
      </header>

      {/* Desktop Navigation */}
      <nav className="absolute top-20 w-full hidden md:flex justify-center px-6 py-3">
        <div className="flex gap-6">
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

          <Dropdown label="Spectre">
            <div className="grid grid-cols-1 gap-2">
              {components.map((c) => (
                <ListItem key={c.title} href={c.href} title={c.title}>
                  {c.description}
                </ListItem>
              ))}
            </div>
          </Dropdown>

          <Dropdown label="Ghost Series II">
            <div className="grid grid-cols-1 gap-2">
              {components.map((c) => (
                <ListItem key={c.title} href={c.href} title={c.title}>
                  {c.description}
                </ListItem>
              ))}
            </div>
          </Dropdown>

          <Dropdown label="Cullinan Series II">
            <div className="grid grid-cols-1 gap-2">
              {components.map((c) => (
                <ListItem key={c.title} href={c.href} title={c.title}>
                  {c.description}
                </ListItem>
              ))}
            </div>
          </Dropdown>

          <Dropdown label="Commission">
            <div className="grid grid-cols-1 gap-2">
              {components.map((c) => (
                <ListItem key={c.title} href={c.href} title={c.title}>
                  {c.description}
                </ListItem>
              ))}
            </div>
          </Dropdown>

          <Dropdown label="Enquire">
            <div className="grid grid-cols-1 gap-2">
              {components.map((c) => (
                <ListItem key={c.title} href={c.href} title={c.title}>
                  {c.description}
                </ListItem>
              ))}
            </div>
          </Dropdown>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/70 z-30 flex">
          <div className="bg-black/90 backdrop-blur-xl w-64 p-6 space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 mb-6 text-white/80 hover:text-white"
            >
              <X className="h-6 w-6" />
              <span>Close</span>
            </button>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-4 text-lg">
              <a className="text-white/80 hover:text-white" href="#">Discover</a>
              <a className="text-white/80 hover:text-white" href="#">Spectre</a>
              <a className="text-white/80 hover:text-white" href="#">Ghost Series II</a>
              <a className="text-white/80 hover:text-white" href="#">Cullinan Series II</a>
              <a className="text-white/80 hover:text-white" href="#">Commission</a>
              <a className="text-white/80 hover:text-white" href="#">Enquire</a>
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}

      {/* Center Text */}
      <div className="flex items-center justify-center h-screen z-20 px-4 text-center pt-[18%]">
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.4em] flex flex-wrap items-center justify-center space-x-4">
          <span>BLACK</span>
          <span className="text-5xl md:text-7xl">&infin;</span>
          <span>BADGE</span>
        </h1>
      </div>
    </div>
  );
}
