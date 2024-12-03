import React from 'react';
import { FaFileUpload, FaRegPaperPlane, FaCalendarAlt } from 'react-icons/fa';

const PaperSubmission = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Submit Your Paper for ICNCDA-2025
        </h1>

        {/* Paper Submission Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Paper Submission Overview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">Why Submit Your Paper?</h2>
            <p className="text-lg text-gray-600">
              ICNCDA-2025 offers an excellent platform for researchers, academics, and professionals in the field of networked computing and data analytics.
              Submitting your paper gives you the chance to present your work at a premier conference and engage with the global academic community.
            </p>

            {/* Submission Process */}
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600">Paper Submission Process:</h3>
              <ol className="list-decimal pl-5 text-gray-600">
                <li>Step 1: Prepare your manuscript following the provided guidelines</li>
                <li>Step 2: Create an account (if you don't have one already)</li>
                <li>Step 3: Submit your paper through the online submission system</li>
                <li>Step 4: Wait for peer review and acceptance notification</li>
                <li>Step 5: If accepted, finalize your registration for the conference</li>
              </ol>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">Submission Guidelines</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaFileUpload className="text-red-600 mr-3" />
                <span className="text-lg text-gray-600">File Format: PDF</span>
              </div>
              <div className="flex items-center">
                <FaRegPaperPlane className="text-red-600 mr-3" />
                <span className="text-lg text-gray-600">Paper Length: Maximum 8 pages</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-red-600 mr-3" />
                <span className="text-lg text-gray-600">Deadline: February 28, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Submit Your Paper?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Don’t miss the opportunity to be part of the prestigious ICNCDA-2025 conference. Submit your research today and contribute to advancing the field!
          </p>
          <a
            href="/submit-paper" // Link to your actual submission portal
            className="inline-block py-3 px-6 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition duration-300"
          >
            Submit Paper Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
