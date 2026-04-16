"use client";

import React, { JSX, useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "../css/original.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/Resume", label: "Resume" },
  { href: "/Projects", label: "My Projects" },
  { href: "/LearningBlog", label: "Learning Blog" },
] as const;

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1041px)");
    const onChange = () => {
      if (media.matches) {
        setMenuOpen(false);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <nav
      className={`topnav${menuOpen ? " topnav--open" : ""}`}
      id="myTopnav"
      aria-label="Main navigation"
    >
      <button
        type="button"
        className="icon"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={28} strokeWidth={2} aria-hidden /> : <Menu size={28} strokeWidth={2} aria-hidden />}
      </button>

      <div id={menuId} className="topnav-links">
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} onClick={closeMenu}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
