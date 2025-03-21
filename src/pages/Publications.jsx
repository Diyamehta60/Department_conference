import React from "react";
import { FaBook, FaRegNewspaper, FaCheckCircle } from "react-icons/fa";

const Publications = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-red-600 mt-12 mb-4">
            Publication Information
          </h1>
          <div className="max-w-3xl space-y-4 mt-12">
            <p className="text-lg text-gray-600 leading-relaxed text-left">
              <FaCheckCircle className="inline-block text-red-500 mr-2" />
              Selected, registered, and post-conference papers will be published in AIP Conference Procedings*
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-left">
              <FaCheckCircle className="inline-block text-red-500 mr-2" />
              Extended versions of conference papers with at least 70% new content 
              may be considered for publication in our partner journal.
            </p>
          </div>
        </div>

        {/* Publication Channels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* ACM Proceedings Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <div className="flex items-center mb-4">
              <FaBook className="text-red-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">
              AIP Conference Proceeding Series
              </h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mr-2">
              
                </span>
                    
                </li>
              <li className="flex items-center">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mr-2">
                
                </span>
                
              </li>
            </ul>
          </div>

          {/* Journal Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <div className="flex items-center mb-4">
              <FaRegNewspaper className="text-red-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">
                Taru Publications and Bentahm Science Journals 
              </h2>
            </div>
            <div className="space-y-4">
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mr-2">
                Guest Editor Dr. Anil Kumar ,Dr. Dinesh Goyal,Dr. Eva Tuba
                </span>
            
              </li>
              <li className="flex items-center">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mr-2">
                Co-Guest Editors 
                </span>
                Dr. Eva Tuba, Dr. Dinesh Goyal
              </li>
            </ul>
              
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-red-50 rounded-xl p-8 border border-red-100">
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            Important Notes
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              All submissions must be original and unpublished work
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              Conference proceedings will be published within 12 weeks of 
              conference conclusion
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              Journal publication decisions will be made through a separate 
              peer-review process
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Publications;