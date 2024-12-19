import React from 'react'

function About() {
  return (
    <div className="p-6 bg-white shadow-md w-full">
      {/* About PIET Section */}
      <h2 className="text-2xl font-bold text-center mb-6 text-red-600">About PIET</h2>
      <p className="mb-4">
        Poornima Institute of Engineering & Technology, Jaipur (PIET), a premier institution in engineering education, was established in the academic year 2007. It is affiliated to Rajasthan Technical University and approved by AICTE. PIET aims at providing world-class technical and scientific education that can develop a professional outlook in every walk of life and has been ranked 3rd in QIV ranking.
      </p>
      <h3 className="text-xl font-semibold mb-4">Notable Achievements:</h3>
      <ul className="list-disc list-inside mb-6">
        <li>1st Institution to offer B.Tech CSE in Regional language.</li>
        <li>Accredited by National Assessment and Accreditation Council (NAAC).</li>
        <li>Two programs, namely B.Tech in Computer Engineering and B.Tech in Civil Engineering, are accredited by National Board of Accreditation (NBA), India for quality education.</li>
        <li>Rated PLATINUM in the Survey of Industry Linked Technical Institutes conducted by AICTE-CII.</li>
        <li>The only institute in Rajasthan funded by AICTE with a fund of Rs. 55 Lakh for establishing an IDEA Lab.</li>
        <li>Granted Rs. 12.84314 Lakh for establishing Neural Network & Deep Learning Lab under MODROB Scheme.</li>
        <li>Received research grants of more than 50 Lakh in 2019-20 & 2020-21 from agencies like TEQIP III, AICTE, NITTTR, etc.</li>
      </ul>

      {/* Photo Cards Section */}
      <h2 className="text-2xl font-bold text-center mb-6 text-red-600">Explore PIET</h2>
      <div className="flex justify-around mb-6">
        <div className="bg-red-100/40 rounded-lg shadow-lg p-4 w-1/3">
          <img
            src="/gallery/2023/i2.jpg"
            alt="Campus"
            className="rounded-lg mb-2"
          />
          <h3 className="font-semibold text-red-600">Campus Life</h3>
          <p>Experience a vibrant campus life with various student activities and events.</p>
        </div>
        <div className="bg-red-100/40 rounded-lg shadow-lg p-4 w-1/3 mx-6">
          <img
            src="/gallery/2023/i5.jpg"
            alt="Labs"
            className="rounded-lg mb-2"
          />
          <h3 className="font-semibold">State-of-the-Art Labs</h3>
          <p>Our laboratories are equipped with the latest technology for practical learning.</p>
        </div>
        <div className="bg-red-100/40 rounded-lg shadow-lg p-4 w-1/3">
          <img
            src="/gallery/2023/i1.jpg"
            alt="Events"
            className="rounded-lg mb-4"
          />
          <h3 className="font-semibold">Events & Workshops</h3>
          <p>Participate in various workshops and seminars to enhance your skills.</p>
        </div>
      </div>

      {/* About the Department of Computer Science Engineering Section */}
      <h2 className="text-2xl font-bold text-center mb-6 text-red-600">About the Department of Computer Science Engineering</h2>
      <p className="mb-6">
        The Department of Computer Science Engineering, PIET, continues to maintain its leadership as one of the founding departments of Poornima Institute of Engineering & Technology (PIET). The department has been able to attract the preference of the most intelligent students available in the state and beyond. Due to its working methodologies and result-oriented approach, it has converted the hard work of students into strong placements. Apart from strong placement, it is also recognized by industrial houses as a source of consultancy and process management. It holds its position as the most innovative, research-oriented, and industry-oriented workplace at PIET.
      </p>

      {/* About the Conference Section */}
      <h2 className="text-2xl font-bold text-center mb-6 text-red-600">About the Conference</h2>
      <p className="mb-4">
        The advent of more advanced computing and communication technologies is finding its way into our day-to-day application areas like smart home and automation, automotive, healthcare, logistics, finance, and other smart city applications. The emerging fifth-generation communication systems foster new technical insights for the Information Technology industry to drive transformation towards next-generation communication. To promote research progress in these advanced intelligent computing and communication technologies, the International Conference on Intelligent Systems & Computing (ICNCDA 2025) on April 23-24, 2025, organized by PIET Jaipur, India, serves as an innovative forum to share and exchange innovative research ideas related to advanced intelligent computing and communication technologies.
      </p>
    </div>
  );
};


export default About
