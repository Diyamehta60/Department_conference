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
          <table className="min-w-full table-auto text-center border-collapse">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-6 text-lg font-semibold">Category</th>
                <th className="py-3 px-6 text-lg font-semibold">Early Bird Registration</th>
                <th className="py-3 px-6 text-lg font-semibold">Regular Registration</th>
                <th className="py-3 px-6 text-lg font-semibold">Late Registration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-gray-800 font-medium">Student</td>
                <td className="py-4 px-6 text-gray-600">$100</td>
                <td className="py-4 px-6 text-gray-600">$150</td>
                <td className="py-4 px-6 text-gray-600">$200</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-gray-800 font-medium">Academician</td>
                <td className="py-4 px-6 text-gray-600">$150</td>
                <td className="py-4 px-6 text-gray-600">$200</td>
                <td className="py-4 px-6 text-gray-600">$250</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-gray-800 font-medium">Industry Professional</td>
                <td className="py-4 px-6 text-gray-600">$250</td>
                <td className="py-4 px-6 text-gray-600">$300</td>
                <td className="py-4 px-6 text-gray-600">$350</td>
              </tr>
            </tbody>
          </table>
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
