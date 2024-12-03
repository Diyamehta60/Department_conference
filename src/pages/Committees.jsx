import React from "react";
import Navbar from "../components/Navbar";

const Committees = () => {
  const organizingCommittee = [
    { name: "Dr. A.K. Sharma", role: "Conference Chair", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Dr. Neha Gupta", role: "Organizing Secretary", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Prof. Rahul Verma", role: "Finance Chair", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Ms. Shweta Mehta", role: "Publicity Chair", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  ];

  const technicalProgramCommittee = [
    { name: "Dr. P. Ramesh", role: "TPC Chair", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Dr. Sunil Kumar", role: "AI Track Lead", image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Dr. Anjali Pathak", role: "Data Science Track Lead", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Dr. Nisha Roy", role: "Networking Track Lead", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  ];

  const advisoryCommittee = [
    { name: "Dr. R.K. Jain", affiliation: "IIT Delhi", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Dr. Veena Agarwal", affiliation: "IIT Bombay", image: "https://randomuser.me/api/portraits/women/5.jpg" },
    { name: "Dr. Amit Joshi", affiliation: "BITS Pilani", image: "https://randomuser.me/api/portraits/men/6.jpg" },
    { name: "Dr. Priya Kapoor", affiliation: "NIT Trichy", image: "https://randomuser.me/api/portraits/women/6.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 mt-12 to-gray-100 text-gray-800">
        {/* <Navbar/> */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-12">
          Committees
        </h1>

        {/* Organizing Committee */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Organizing Committee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizingCommittee.map((member, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Program Committee */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Technical Program Committee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalProgramCommittee.map((member, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Committee */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Advisory Committee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryCommittee.map((member, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Committees;
