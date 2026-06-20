import React from "react";
import { useLocation } from "react-router-dom";

const ArchiveTab = () => {
  const { pathname } = useLocation();
  const isArchiveRoute = pathname.startsWith("/icncda2025") || pathname.startsWith("/archive/2025");

  return (
    <>
      <a
        href="/archive/2025"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ICNCDA2025 archive in a new tab"
        className="fixed right-0 top-1/2 z-[9999] -translate-y-1/2 rounded-l-md bg-red-600 px-3 py-4 text-sm font-bold tracking-wide text-white shadow-2xl transition duration-300 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-red-300"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        ICNCDA2025
      </a>
      {isArchiveRoute && (
        <a
          href="/"
          aria-label="Go to ICNCDA2026 main website"
          className="fixed right-0 top-[calc(50%+8.5rem)] z-[9999] -translate-y-1/2 rounded-l-md bg-blue-900 px-3 py-4 text-sm font-bold tracking-wide text-white shadow-2xl transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        >
          ICNCDA2026
        </a>
      )}
    </>
  );
};

export default ArchiveTab;
