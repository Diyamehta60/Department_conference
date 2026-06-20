import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Publications = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-red-600 mt-12 mb-4">
            Publication Information
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 mt-12">
            <p className="text-lg text-gray-600 leading-relaxed text-left">
              <FaCheckCircle className="inline-block text-red-500 mr-2" />
              Confrence Proceedings Approval Pending*
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-left">
              <FaCheckCircle className="inline-block text-red-500 mr-2" />
               IET Conference Proceeding Series (Approval Pending)
            </p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Publications;
