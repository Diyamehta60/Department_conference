import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#0b1220] px-6 py-12">
      <div className="mx-auto max-w-7xl border-t border-white/20 pt-10 text-center">
        <p className="text-lg leading-9 text-white md:text-xl md:leading-10">
          The Microsoft CMT service was used for managing the peer-reviewing
          process for this conference. This service was provided for free by
          Microsoft and they bore all expenses, including costs for Azure cloud
          services as well as for software development and support.
        </p>
        <p className="mt-6 text-xl text-white md:text-2xl">
          © 2026 SECONDICNCDA2026. All rights reserved. | Created By: Diya
          Mehta
        </p>
      </div>
    </footer>
  );
}

export default Footer;
