import React from 'react';
import { FaRegPaperPlane, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

const CallForPapers = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 mt-12">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Call for Papers: ICNCDA-2025
        </h1>

        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-6">
            The International Conference on Networked Computing and Data Analytics (ICNCDA-2025) invites high-quality research papers on topics related to
            networked computing, data analytics, and related fields.
          </p>
          <p className="text-lg text-gray-600">
            Authors are encouraged to submit original and unpublished research papers that contribute to the theoretical and practical understanding of these
            emerging areas.
          </p>
        </div>

        {/* Topics of Interest */}
        <div className="bg-red-50 p-6 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Topics of Interest</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600 space-y-4">
            <li>Data Analytics in IoT and Smart Systems</li>
            <li>Machine Learning and Artificial Intelligence in Networking</li>
            <li>Cloud Computing and Edge Computing</li>
            <li>Big Data Processing and Optimization</li>
            <li>Network Security and Cryptography</li>
            <li>Distributed Systems and Blockchain Technologies</li>
            <li>Data Visualization and Interactive Systems</li>
            <li>Data Mining and Pattern Recognition</li>
            <li>Data Analytics in IoT and Smart Systems</li>
            <li>Machine Learning and Artificial Intelligence in Networking</li>
            <li>Cloud Computing and Edge Computing</li>
            <li>Big Data Processing and Optimization</li>
            <li>Network Security and Cryptography</li>
            <li>Distributed Systems and Blockchain Technologies</li>
            <li>Data Visualization and Interactive Systems</li>
            <li>Data Mining and Pattern Recognition</li>
            <li>Network Traffic Analysis and Management</li>
            <li>5G Networks and Beyond</li>
            <li>Quantum Computing for Networked Systems</li>
            <li>Smart Grids and Energy Systems</li>
            <li>Real-Time Data Streaming and Analytics</li>
            <li>Next-Generation Wireless Networks</li>
            <li>Autonomous Systems and Networking</li>

          </ul>
        </div>

        {/* Important Dates */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Dates</h2>
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-red-600 mr-3" />
            <span className="text-lg text-gray-600">
              Paper Submission Deadline: March 28, 2025
            </span>
          </div>
          <div className="flex items-center mb-4">
            <FaRegPaperPlane className="text-red-600 mr-3" />
            <span className="text-lg text-gray-600">
              Notification of Acceptance: April 1, 2025
            </span>
          </div>
          <div className="flex items-center">
            <FaFileAlt className="text-red-600 mr-3" />
            <span className="text-lg text-gray-600">
              Camera-Ready Submission: April 5, 2025
            </span>
          </div>
        </div>

        {/* Paper Submission Guidelines */}
        <div className="bg-red-50 p-6 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Submission Guidelines</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <div className="flex items-center">
              <FaFileAlt className="text-red-600 mr-3" />
              <span>All submissions must be in PDF format.</span>
            </div>
            <div className="flex items-center">
              <FaFileAlt className="text-red-600 mr-3" />
              <span>The paper should not exceed 8 pages.</span>
            </div>
            <div className="flex items-center">
              <FaFileAlt className="text-red-600 mr-3" />
              <span>Use the IEEE Conference Template for formatting.</span>
            </div>
            <div className="flex items-center">
              <FaFileAlt className="text-red-600 mr-3" />
              <span>Ensure to follow the double-blind review policy.</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Submit Your Paper?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Submit your paper to ICNCDA-2025 and join leading experts from around the world to explore the latest advancements in networked computing and data
            analytics.
          </p>
          <a
            href="/submit-paper" // Link to your actual paper submission portal
            className="inline-block py-3 px-6 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition duration-300"
          >
            Submit Paper Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
