import React from "react";

const Committees = () => {
  const committeeData = [
    {
      title: "Honorary Patron",
      members: [
        { name: "Mr. Hari Singh", role: "Director (Infrastructure), Poornima Group, Jaipur" },
        { name: "Mr. MKM Shah", role: "Director (Admin & Finance), Poornima Group, Jaipur" },
      ],
    },
    {
      title: "Honorary Chair",
      members: [
        { name: "Prof. Marcin Paprzycki", role: "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland" },
        { name: "Prof. B.B. Gupta", role: "Director, Center for AI & Cyber Security, Asia University, Taichung 413, Taiwan" },
        { name: "Dr. Sugandha Singh", role: "Dean-Faculty of Engineering and Technology and Prof - CSE(SGTU) Gurugram" },
      ],
    },
    {
      title: "General Chair",
      members: [
        { name: "Prof. Dharam Singh", role: "Namibia University of Science & Tech., Namibia" },
      ],
    },
    {
      title: "Conference Chair",
      members: [
        { name: "Dr. Dinesh Goyal", role: "Professor & Director, PIET, Jaipur" },
      ],
    },
    {
      title: "Steering Committee",
      members: [
        { name: "Dr. Pooja Jain", role: "Professor, IIIT, Nagpur" },
        { name: "Dr. JC Bansal", role: "Professor, South Asian University" },
        { name: "Dr. Carlos M. Travieso-Gonzalez", role: "Professor, Signals and Communication Department, University of Las Palmas de Gran Canaria, Spain" },
        { name: "Dr. Saurabh Sinha", role: "Professor, University Of Canterbury" },
        { name: "Dr. Nischal Verma", role: "Professor, IIT Kanpur" },
      ],
    },
    {
      title: "Conference Co-Chair",
      members: [
        { name: "Dr. Anil Kumar", role: "Professor & HoD CSE, PIET, Jaipur" },
        { name: "Prof. (Dr.) Budesh Kanwar", role: "Professor & HoD AI & DS, PIET, Jaipur" },
      ],
    },
    {
      title: "Organizing Committee",
      members: [
        { name: "Ms. Jayshree Surolia", role: "PIET, Jaipur" },
        { name: "Ms. Ashima Tiwari", role: "PIET, Jaipur" },
        { name: "Dr. Saurabh Raj", role: "PIET, Jaipur" },
        { name: "Ms. Bersha Kumari", role: "PIET, Jaipur" },
      ],
    },
    {
      title: "Technical Program Committee",
      members: [
        { name: "Dr. Ajit Singh", role: "IIT, Ropar" },
        { name: "Dr. S.S. Patel", role: "Professor, MNIT, Jaipur" },
        { name: "Dr. Sheetal Mehta", role: "BITS Pilani, Goa Campus" },
        { name: "Dr. Anurag Shrivastava", role: "Delhi Technological University, Delhi" },
      ],
    },
    {
      title: "Publication Committee",
      members: [
        { name: "Dr. Rajesh Kumar", role: "Professor, IIT Roorkee" },
        { name: "Dr. Suman Bala", role: "Professor, Amity University" },
      ],
    },
    {
      title: "Finance Committee",
      members: [
        { name: "Mr. G.L. Parwani", role: "Finance Officer, Poornima University" },
        { name: "Mr. Naveen Sharma", role: "Finance Head, PIET, Jaipur" },
      ],
    },
    {
      title: "Registration Committee",
      members: [
        { name: "Dr. Suman Kumawat", role: "PIET, Jaipur" },
        { name: "Dr. Ashish Joshi", role: "PIET, Jaipur" },
      ],
    },
    {
      title: "Publicity Committee",
      members: [
        { name: "Dr. Meenakshi Bhatnagar", role: "PIET, Jaipur" },
        { name: "Dr. Vikas Vyas", role: "PIET, Jaipur" },
        { name: "Dr. Ashok Beniwal", role: "PIET, Jaipur" },
      ],
    },
    {
      title: "Local Arrangement Committee",
      members: [
        { name: "Dr. Aarti Sharma", role: "PIET, Jaipur" },
        { name: "Dr. Rahul Sharma", role: "PIET, Jaipur" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 mt-14 to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-12">Committees</h1>
        {committeeData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-red-500 mb-8">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="p-6 bg-white border-l-4 border-red-500 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Committees;
