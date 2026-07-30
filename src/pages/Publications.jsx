import React from "react";
import { FaBookOpen, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const Publications = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-red-600 mt-12 mb-4">
            Publication Information
          </h1>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="flex flex-col items-center gap-6 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm sm:flex-row sm:items-start">
              <img
                src="/gallery/logos/springer1.jpeg"
                alt="Springer Logo"
                className="h-24 w-auto object-contain"
              />
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-800">
                  Approved from Springer STEAM-H Book Series
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Accepted and registered papers will be considered for publication in
                  Springer Nature's STEAM-H: Science, Technology, Engineering,
                  Agriculture, Mathematics & Health book series.
                </p>
                <a
                  href="https://link.springer.com/series/15560"
                  className="mt-4 inline-flex items-center gap-2 text-red-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Springer Series
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-5">
                <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800">
                  <FaBookOpen className="text-red-500" />
                  Author Information
                </h2>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>
                    <FaCheckCircle className="inline-block text-red-500 mr-2" />
                    Submit full research or review papers through the official CMT
                    submission portal.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block text-red-500 mr-2" />
                    Only accepted and registered papers will be considered for
                    presentation and publication.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block text-red-500 mr-2" />
                    Authors should follow the Springer Nature Word template and
                    conference submission guidelines.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 p-5">
                <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800">
                  <FaCheckCircle className="text-red-500" />
                  Review and Indexing
                </h2>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>
                    <FaCheckCircle className="inline-block text-red-500 mr-2" />
                    The STEAM-H series follows a single-blind peer-review process.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block text-red-500 mr-2" />
                    A minimum of two review reports are requested for each submitted
                    manuscript.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block text-red-500 mr-2" />
                    Titles in this series are indexed by Scopus and zbMATH.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Publications;
