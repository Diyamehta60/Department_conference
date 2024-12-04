import React from 'react';

const Registration = () => {
  return (
    <div className="min-h-screen mt-12 bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Registration: ICNCDA-2025
        </h1>

        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-6">
            Register now for the International Conference on Networked Computing and Data Analytics (ICNCDA-2025) to join a global community of researchers, academics, and industry professionals.
          </p>
        </div>

        {/* Registration Categories Table */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full table-auto text-center border-collapse border border-gray-200">
            <thead className="bg-red-600 text-white text-left">
              <tr>
                <th className="py-3 px-6 text-lg font-semibold border border-gray-200">Category</th>
                <th className="py-3 px-6 text-lg font-semibold border border-gray-200">Early Bird Registration</th>
                <th className="py-3 px-6 text-lg font-semibold border border-gray-200">Regular Registration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Faculty Member (International Professional Membership)", "INR 6,000", "INR 8,000"],
                ["Faculty (International Professional Membership) With International co-Author", "INR 5,000", "INR 7,000"],
                ["Faculty International Author and Member (International Professional Membership)", "$100", "$130"],
                ["Faculty Non-Member (International Professional Membership)", "INR 7,000", "INR 9,000"],
                ["Faculty Non-Member (International Professional Membership) with International co-Author", "INR 6,000", "INR 8,000"],
                ["International Author Non-Member (International Professional Membership)", "$150", "$200"],
                ["Corporate/Industry Professional", "INR 8,000", "INR 9,000"],
                ["Ph.D Student", "INR 5,500", "INR 7,500"],
                ["PG/UG Student", "INR 2,000", "INR 2,500"],
                ["Attendee", "INR 1,000", "INR 2,000"],
              ].map(([category, earlyBird, regular], index) => (
                <tr
                  key={index}
                  className={`border-t text-left border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : ""}`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium border border-gray-200">{category}</td>
                  <td className="py-4 px-6 text-gray-600 border border-gray-200">{earlyBird}</td>
                  <td className="py-4 px-6 text-gray-600 border border-gray-200">{regular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-red-50 p-8 rounded-lg shadow-md mb-12 border-t-4 border-red-600">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Account Details</h2>
  <p className="text-base text-gray-700 mb-6">
    <strong className="text-red-600">Note:</strong> No paper is allowed to have more than 5 authors. Please ensure all payments are made to the account details below:
  </p>
  <div className="space-y-4">
    <div className="flex justify-start items-center border-b pb-2">
      <span className="font-semibold text-gray-800 mr-2">Account Name:</span>
      <span className="text-gray-600">POORNIMA INSTITUTE PART ONE</span>
    </div>
    <div className="flex justify-start items-center border-b pb-2">
      <span className="font-semibold text-gray-800 mr-2">Account Number:</span>
      <span className="text-gray-600">50200067728610</span>
    </div>
    <div className="flex justify-start items-center border-b pb-2">
      <span className="font-semibold text-gray-800 mr-2">Bank:</span>
      <span className="text-gray-600">HDFC BANK LTD., F-129 RIICO Industrial Area, Sitapura, Jaipur</span>
    </div>
    <div className="flex justify-start items-center border-b pb-2">
      <span className="font-semibold text-gray-800 mr-2">IFSC Code:</span>
      <span className="text-gray-600">HDFC0003873</span>
    </div>
    <div className="flex justify-start items-center ">
      <span className="font-semibold text-gray-800 mr-2">SWIFT Code:</span>
      <span className="text-gray-600">HDFCINBBXXX</span>
    </div>
  </div>
</div>


        {/* Payment Methods Section */}
        <div className="bg-red-50 p-6 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Accepted Payment Methods</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600 space-y-4">
            <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
            <li>Bank Transfer</li>
            <li>Online Payment Gateways (PayPal, Stripe)</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Register?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Secure your spot at ICNCDA-2025 by registering now! Don’t miss the chance to be part of this global conference.
          </p>
          <a
            href="/registration-form" // Link to your actual registration form
            className="inline-block py-3 px-6 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
