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
          <h1>AIP Conference Proceedings has been a trusted publishing partner for more than 40 years, delivering fast, affordable, and versatile publishing for maximum exposure of your meeting’s key research areas.</h1>
        </section>

        {/* Author Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Author Guidelines</h2>
          <p className="text-gray-600 mb-4">
            The authors are invited to submit the Full papers of the Research/Review Papers. The papers will be peer-reviewed and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings.
          </p>
          <p className='text-gray-600 mb-4'>NOTE : Acceptance of a full-length submission is strictly based on the reviewers’ comments.</p>
          <p className='text-gray-600 mb-4'>All submissions need to be submitted through the CMT using the link : <span className='font-bold'>https://cmt3.research.microsoft.com/ICNCDA2025</span></p>
        </section>

        {/* Submission Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Submission Guidelines</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Use the official templates for submission: &nbsp;
              <a
                href="https://pubs.aip.org/aip/acp/pages/preppapers"
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
            <li>It is advised that page lenght should not be greater than 10 pages</li>
            <li>Ensure a similarity score below or equla to 10%.</li>
          </ul>
          <div className="flex items-center mt-4">
            <FaCalendarAlt className="text-red-600 mr-2" />
            <span className="text-lg text-gray-600">
              Submission Deadline: <strong>March 25, 2025</strong>
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
            href="https://cmt3.research.microsoft.com/ICNCDA2025"
            className="py-3 px-6 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Paper Now
          </a>
        </div>
        {/* Reviewer Section */}
      <div className="text-center mt-16 pt-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Do You Want to Be a Reviewer?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Join our team of reviewers for ICNCDA-2025. Share your expertise and help shape the future of research in this
          field!
        </p>
        <a
          href="https://tinyurl.com/ReviewFormICNCDA" // Replace with your actual reviewer form URL
          className="py-3 px-6 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply as Reviewer
        </a>
      </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
