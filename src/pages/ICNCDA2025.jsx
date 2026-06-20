import React from "react";
import {
  FaCalendarAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const archiveLinks = [
  { title: "Home", path: "#archive-home" },
  { title: "Call for Papers", path: "#call-for-papers" },
  { title: "Paper Submission", path: "#paper-submission" },
  { title: "Registration", path: "#registration" },
  { title: "Committee", path: "#committee" },
  { title: "Publications", path: "#publications" },
  { title: "Conference Partners", path: "#partners" },
  { title: "Speakers", path: "#speakers" },
];

const importantDates = [
  ["Paper Submission Deadline", "Closed"],
  ["Notification of Acceptance", "Completed"],
  ["Camera Ready Submission", "Completed"],
  ["Registration", "Completed"],
  ["Conference Dates", "23rd & 24th May, 2025"],
];

const topics = [
  "Data Analytics and IoT in Smart Systems",
  "Machine Learning and Artificial Intelligence in Networking",
  "Cloud Computing and Edge Computing",
  "Network Security and Cryptography",
  "Distributed Systems and Blockchain Technologies",
  "Data Visualization and Interactive Systems",
  "5G Networks and Beyond",
  "Computer Vision and Image Processing over Network",
  "VLSI and Embedded System for Network Monitoring",
];

const galleryImages = [
  "/gallery/2023/i1.jpg",
  "/gallery/2023/i2.jpg",
  "/gallery/2023/i3.jpg",
  "/gallery/2023/i4.jpg",
  "/gallery/2023/i5.jpg",
  "/gallery/2023/i6.jpg",
];

const partnerImages = [
  "/iste.jpg",
  "/csi.jpg",
  "/iie.jpg",
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
];

const ICNCDA2025 = () => {
  return (
    <div id="archive-home" className="min-h-screen bg-gray-100 text-gray-800">
      <section className="relative min-h-[85vh] bg-[url('/frontend.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-950/60" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center text-white">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-8">
            <img src="/img10.png" alt="PIET logo" className="h-24 object-contain" />
            <img src="/naac_grade.png" alt="NAAC grade" className="h-24 object-contain" />
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-red-200">
            Website Archive
          </p>
          <h1 className="max-w-5xl text-3xl font-extrabold leading-tight md:text-5xl">
            1st International Conference on Networked Computing and Data Analytics
          </h1>
          <p className="mt-4 text-2xl font-bold text-red-100">ICNCDA-2025</p>
          <div className="mt-8 flex flex-col items-center gap-3 text-lg md:flex-row md:gap-10">
            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              23rd & 24th May, 2025
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt />
              PIET, Sitapura, Jaipur
            </span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-12 bg-white p-6 shadow-md">
          <h2 className="mb-4 text-3xl font-bold text-red-600">Complete Website Archive</h2>
          <p className="mb-6 text-gray-600">
            This page keeps the ICNCDA 2025 conference archive in one place. Use the links below to
            access the archived sections, resources, gallery, partners, and conference information.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {archiveLinks.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="border-l-4 border-red-600 bg-red-50 p-4 font-semibold text-blue-900 shadow-sm transition hover:bg-red-100 hover:text-red-700"
              >
                {item.title}
              </a>
            ))}
          </div>
        </section>

        <section id="registration" className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white p-6 shadow-md">
            <h2 className="mb-5 text-2xl font-bold text-red-600">Important Dates</h2>
            <div className="space-y-3">
              {importantDates.map(([title, date]) => (
                <div key={title} className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-700">{title}</span>
                  <span className="text-red-600">{date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 shadow-md">
            <h2 className="mb-5 text-2xl font-bold text-red-600">Archive Downloads</h2>
            <div className="space-y-3">
              <a
                href="/AIPCP Article Template_Sept1_2023.pdf"
                className="flex items-center gap-3 text-blue-900 hover:text-red-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload />
                AIPCP Article Template PDF
              </a>
              <a
                href="/AIPCP Article Template_Sept1_2023.docx"
                className="flex items-center gap-3 text-blue-900 hover:text-red-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload />
                AIPCP Article Template DOCX
              </a>
            </div>
          </div>
        </section>

        <section id="publications" className="mb-12 bg-white p-6 shadow-md">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex w-full justify-center md:w-1/3">
              <img
                src="/aip-publishing-logo.png"
                alt="AIP Publishing"
                className="max-h-28 w-full max-w-sm object-contain"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-sm font-bold uppercase tracking-wider text-red-600">
                Exclusive Publication Information
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-blue-900">
                AIP Conference Proceedings
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                This conference is exclusively associated with AIP Publishing for AIP Conference
                Proceedings.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 border-l-4 border-red-600 bg-red-50 p-6 shadow-md">
          <h2 className="mb-5 text-2xl font-bold text-red-600">
            Publication Discretion Policy
          </h2>
          <a
            href="https://pubs.aip.org/aip/acp/pages/discretion"
            className="mb-5 inline-flex items-center gap-2 font-semibold text-blue-900 underline hover:text-red-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View official AIP policy document <FaExternalLinkAlt />
          </a>
          <div className="space-y-4 leading-relaxed text-gray-700">
            <p>
              All submitted conference materials are subject to mandatory editorial assessment,
              Research Integrity screening, and technical quality review. These evaluations are
              substantive and are conducted regardless of the ultimate publication outcome.
            </p>
            <p>
              All fees are non-refundable. Fees compensate for the administrative, editorial,
              ethical compliance, production preparation, and platform processing services required
              to evaluate and prepare submitted materials for potential publication. These services
              are deemed rendered upon submission and review.
            </p>
            <p>
              Publication in AIP Conference Proceedings is expressly contingent upon successful
              completion of scope evaluation, ethical compliance verification, and quality standards
              assessment. AIP Publishing retains sole and absolute discretion to determine whether
              any submitted material, in whole or in part, satisfies its publication standards and
              policies.
            </p>
            <p>
              If submitted materials are declined for publication, in whole or in part, no refund
              will be issued.
            </p>
            <p>
              Submission of materials constitutes acknowledgment and acceptance of this policy and
              AIP Publishing's publication standards, guidelines, and review authority.
            </p>
          </div>
        </section>

        <section id="call-for-papers" className="mb-12 bg-white p-6 shadow-md">
          <h2 className="mb-5 text-2xl font-bold text-red-600">Call for Papers Archive</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div key={topic} className="bg-gray-50 p-4 text-gray-700">
                {topic}
              </div>
            ))}
          </div>
          <a
            href="https://cmt3.research.microsoft.com/ICNCDA2025"
            className="mt-6 inline-flex items-center gap-2 bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICNCDA 2025 Submission Portal <FaExternalLinkAlt />
          </a>
        </section>

        <section id="paper-submission" className="mb-12 bg-white p-6 shadow-md">
          <h2 className="mb-5 text-2xl font-bold text-red-600">Gallery Archive</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((image) => (
              <img
                key={image}
                src={image}
                alt="ICNCDA archive gallery"
                className="h-44 w-full object-cover shadow-sm"
              />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {["2019", "2020", "2021", "2022", "2023"].map((year) => (
              <a
                key={year}
                href={`/gallery/${year}/i1.jpg`}
                className="bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {year} Gallery
              </a>
            ))}
          </div>
        </section>

        <section id="partners" className="mb-12 bg-white p-6 shadow-md">
          <h2 className="mb-5 text-2xl font-bold text-red-600">Partners and Sponsors Archive</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {partnerImages.map((image) => (
              <div key={image} className="flex items-center justify-center bg-gray-50 p-4">
                <img src={image} alt="ICNCDA archive partner" className="h-24 object-contain" />
              </div>
            ))}
          </div>
        </section>

        <section id="committee" className="mb-12 bg-red-50 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-red-600">About ICNCDA 2025</h2>
          <p className="leading-relaxed text-gray-700">
            The 1st International Conference on Networked Computing and Data Analytics
            (ICNCDA-2025) was organized by the Department of Computer Engineering, Poornima
            Institute of Engineering and Technology, Jaipur. The archive preserves the conference
            information, topic areas, submission resources, institutional details, and photo records
            for future reference.
          </p>
        </section>

        <section id="speakers" className="bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-red-600">Speakers Archive</h2>
          <p className="leading-relaxed text-gray-700">
            ICNCDA 2025 speaker details are preserved in the archive for reference.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ICNCDA2025;
