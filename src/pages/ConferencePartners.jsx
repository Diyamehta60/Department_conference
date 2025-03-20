import React from "react";
import Sponser2 from "../components/Sponser2";

const ConferencePartners = () => {
  return (
    <div className="min-h-screen mt-14 bg-gradient-to-b from-red-50 to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-12">
          Conference Partners
        </h1>
        <section>
          <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          <h1 className="text-3xl font-bold text-red-500 text-center my-12">
            Introducing with great excitement: ICNCDA 2025, in partnership with IIIT Nagpur, Asia University Taiwan, and Namibia University.
          </h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            “This groundbreaking event marks a new era of innovation, collaboration, and knowledge exchange. Join us as we unveil a remarkable conference experience that will shape the future of technology and academia.”
          </p>

          <Sponser2 />

          <ul className="my-12 space-y-6">
            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-red-500 mb-4">1. IIIT Nagpur</h3>
              <p className="text-gray-600">
                Indian Institute of Information Technology Nagpur is a prestigious institution of higher education in the field of Information Technology and Computer Science. It is one of the leading institutes in India dedicated to fostering excellence in education, research, and innovation. With a focus on providing industry-relevant curriculum, state-of-the-art facilities, and a vibrant academic environment, IIIT Nagpur aims to nurture the next generation of technocrats and leaders in the IT industry.
              </p>
            </li>

            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-red-500 mb-4">2. Asia University</h3>
              <p className="text-gray-600">
                Asia University, located in Taiwan, is a prestigious institution renowned for its commitment to academic excellence and innovative research. With a diverse and vibrant campus community, Asia University offers a wide range of undergraduate and graduate programs in various fields. With a focus on global perspectives, interdisciplinary learning, and practical skills development, Asia University prepares students to excel in their chosen careers and make a positive impact in the world.
              </p>
            </li>

            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-red-500 mb-4">3. Namibia University</h3>
              <p className="text-gray-600">
                Namibia University provides exceptional education and a vibrant learning community. This institution is dedicated to nurturing intellectual growth, fostering critical thinking skills, and promoting a spirit of innovation. With a wide range of academic programs, state-of-the-art facilities, and a supportive faculty, Namibia University empowers students to become future leaders and contribute positively to society. The Namibia University provides a transformative educational journey, where knowledge meets opportunity.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-red-500 mb-4">4. AIP Publishing</h3>
              <p className="text-gray-600">
              AIP Conference Proceedings is a well-known series published by AIP Publishing, featuring research from scientific conferences. It is indexed in Scopus and has the ISSN: 0094-243X (Print) and 1551-7616 (Online). These proceedings cover diverse areas of physics, materials science, and engineering.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-red-500 mb-4">5. Bentham Sceince</h3>
              <p className="text-gray-600">
              The International Journal of Sensors, Wireless Communications, and Control (ISSN: 2210-3279) and Recent Advances in Computer Science and Communications (ISSN: 2666-2558 Print, 2666-2566 Online) are Scopus-indexed journals by Bentham Science, focusing on advanced research in wireless networks, sensors, computer science, AI, data science, and emerging technologies.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ConferencePartners;
