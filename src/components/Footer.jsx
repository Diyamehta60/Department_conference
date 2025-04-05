// import React from "react";
// import { CiMail } from "react-icons/ci";

// function Footer() {
//   return (
//     <div className="text-center bg-red-100/40 p-6 flex flex-col md:flex-row justify-between items-start gap-8 w-full">
//       {/* Left Section */}
//       <div className="flex-1 text-left px-4">
//         <h2 className="font-bold mb-4">ICNCDA</h2>
//         <p>
//           The{" "}
//           <a href="#" className="text-purple-600 hover:underline">
//             Microsoft CMT
//           </a>{" "}
//           service was used for managing the peer-reviewing process for this
//           conference. This service was provided for free by Microsoft and they
//           bore all expenses, including costs for Azure cloud services as well as
//           for software development and support.
//         </p>
//       </div>

//       {/* Center Section */}
//       <div className="flex-1 flex flex-col items-center justify-center">
//         <a
//           href="#"
//           className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
//         >
//           <img src="/clglogo.png" className="h-12 mr-3 sm:h-10" alt="ICNCDA" />
//           ICNCDA
//         </a>
//         <span className="block text-sm text-center text-gray-500">
//           © 2024-2025 ICNCDA. All Rights Reserved. 
//         </span>
//         <span className="mt-2">Created By: Diya Mehta</span>
//         <ul className="flex justify-center mt-5 space-x-5">
//           {/* Social media icons remain same */}
//         </ul>
        
//       </div>

//       {/* Right Section */}
//       <div className="flex-1 text-left px-4">
//         <h2 className="font-bold mb-4">Contact Information</h2>
//         <div>
//             <p className="mt-2">
//             <a
//               href="mailto:icncda@poornima.org"
//               className="text-blue-500 underline flex items-center gap-2"
//             >
//               <CiMail className="inline-block text-black text-xl" />
//               <span>icncda@poornima.org</span>
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React, { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";

function Footer() {
  const [count, setCount] = useState(0);

  // Increase counter on page load
  useEffect(() => {
    const storedCount = localStorage.getItem("pageHitCount");
    const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    
    setCount(newCount);
    localStorage.setItem("pageHitCount", newCount);
  }, []);

  return (
    <div className="text-center bg-red-100/40 p-6 flex flex-col md:flex-row justify-between items-start gap-8 w-full">
      {/* Left Section */}
      <div className="flex-1 text-left px-4">
        <h2 className="font-bold mb-4">ICNCDA</h2>
        <p>
          The{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Microsoft CMT
          </a>{" "}
          service was used for managing the peer-reviewing process for this
          conference. This service was provided for free by Microsoft and they
          bore all expenses, including costs for Azure cloud services as well as
          for software development and support.
        </p>
      </div>

      {/* Center Section */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <a
          href="#"
          className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
        >
          <img src="/clglogo.png" className="h-12 mr-3 sm:h-10" alt="ICNCDA" />
          ICNCDA
        </a>
        <span className="block text-sm text-center text-gray-500">
          © 2024-2025 ICNCDA. All Rights Reserved. 
        </span>
        <span className="mt-2">Created By: Diya Mehta</span>

        {/* Styled Counter */}
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl shadow-lg flex flex-col items-center">
          <span className="text-xl font-semibold">Counter</span>
          <span className="text-4xl font-bold mt-2 animate-pulse">{count}</span>
        </div>

        <ul className="flex justify-center mt-5 space-x-5">
          {/* Social media icons remain same */}
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex-1 text-left px-4">
        <h2 className="font-bold mb-4">Contact Information</h2>
        <div>
          <p className="mt-2">
            <a
              href="mailto:icncda@poornima.org"
              className="text-blue-500 underline flex items-center gap-2"
            >
              <CiMail className="inline-block text-black text-xl" />
              <span>icncda@poornima.org</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;