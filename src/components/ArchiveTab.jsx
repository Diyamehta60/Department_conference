import React from "react";
import { Link } from "react-router-dom";

const ArchiveTab = () => {
  return (
    <Link
      to="/icncda2025"
      className="fixed right-0 top-1/2 z-[9999] -translate-y-1/2 rounded-l-md bg-red-600 px-3 py-4 text-sm font-bold tracking-wide text-white shadow-2xl transition duration-300 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-red-300"
      style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
    >
      ICNCDA2025
    </Link>
  );
};

export default ArchiveTab;
