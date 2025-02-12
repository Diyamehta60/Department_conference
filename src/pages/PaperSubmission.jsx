import React from 'react';
import { FaFileUpload, FaRegPaperPlane, FaCalendarAlt } from 'react-icons/fa';

const PaperSubmission = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 mt-12">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Paper Submission - ICNCDA-2025
        </h1>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Submit Your Paper?</h2>
          <p className="text-lg text-gray-600">
            ICNCDA-2025 offers an international platform for researchers to present their work in
            networked computing and data analytics. Be a part of this prestigious conference and
            engage with global experts in the field.
          </p>
        </section>

        {/* Publishing Models */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Publishing Models</h2>
          {/* <div className="space-y-4 text-gray-600">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600">Free Publishing</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>ACM Open Program Institutions:</strong> Authors from institutions in the{' '}
                  <a
                    href="https://libraries.acm.org/acmopen/open-participants"
                    className="text-red-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ACM Open Program
                  </a>{' '}
                  can publish for free.
                </li>
                <li>
                  <strong>Low-Income Countries:</strong> Papers from authors in eligible low-income
                  countries are also free.
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600">APC Paid Publication Rates</h3>
              <ul className="list-disc pl-5">
                <li>
                  $350 for lower-middle-income countries with at least one ACM member author (50%
                  waivers available).
                </li>
                <li>
                  $500 for lower-middle-income countries without ACM member authors (50% waivers
                  available).
                </li>
              </ul>
              <p>
                Learn more about{' '}
                <a
                  href="https://www.acm.org/publications/openaccess#waivers"
                  className="text-red-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACM waivers and discounts
                </a>
                .
              </p>
            </div>
          </div> */}
          <h1>Will Be Announcing Soon</h1>
        </section>

        {/* Submission Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Submission Guidelines</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Use the official templates for submission: &nbsp;
              <a
                href="https://authors.acm.org/binaries/content/assets/publications/taps/acm_submission_template.docx"
                className="text-red-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Word Template
              </a>
              &nbsp; | &nbsp;
              <a
                href="https://portalparts.acm.org/hippo/latex_templates/acmart-primary.zip"
                className="text-red-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LaTeX Template
              </a>
            </li>
            <li>Maximum paper length: 6 pages.</li>
            <li>Ensure a similarity score below 10%.</li>
          </ul>
          <div className="flex items-center mt-4">
            <FaCalendarAlt className="text-red-600 mr-2" />
            <span className="text-lg text-gray-600">
              Submission Deadline: <strong>March 8, 2025</strong>
            </span>
          </div>
        </section>

        {/* Review Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Review Process</h2>
          <p className="text-gray-600">
            Papers with a similarity score below 10% will undergo a double-blind review by the
            technical committee. Outcomes include:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>Accepted for oral presentation.</li>
            <li>Accepted with minor corrections.</li>
            <li>Rejected.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Submit Your Paper?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Don’t miss this opportunity to contribute to ICNCDA-2025. Click below to start the
            submission process!
          </p>
          <a
            href="https://bentham.manuscriptpoint.com/submit/Submission/submissionForm/6979/m" // Update with the actual submission portal link
            className="py-3 px-6 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition duration-300"
          >
            Submit Paper Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
