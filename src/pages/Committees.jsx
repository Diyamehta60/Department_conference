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
        { name: "Dr. Carlos M. Travieso-Gonzalez", role: "Professor, Signals and Communication Department, University of Las Palmas de Gran Canaria, Spain" },
      ],
    },
    {
      title: "Conference Co-Chair",
      members: [
        { name: "Dr. Dinesh Goyal", role: "Professor & Director, PIET, Jaipur" },
        { name: "Dr. Anil Kumar", role: "Professor & HoD CSE, PIET, Jaipur" },
      ],
    },
    {
      title: "Organising Chair",
      members: [
        { name: "Dr. Shalini Choudhary", role: "Associate Professor, PIET, Jaipur" },
        { name: "Dr. Naveen Goyal", role: "Associate Professor, PIET, Jaipur" },
        { name: "Dr. Sanjay Kumar Sinha", role: "Associate Professor, PIET, Jaipur" },
        { name: "Dr. Shruti Thapar", role: "Associate Professor, PIET, Jaipur" },
      ],
    },
    {
      title: "Technical Program Chair",
      members: [
        { name: "Dr. Atul Gonsai", role: "Professor, Saurasthra University, Rajkot" },
        { name: "Dr. Manoj Kumar", role: "Professor, Delhi Technical University, Delhi" },
        { name: "Dr. Harish Sharma", role: "Associate Professor, RTU" },
        { name: "Dr. OP Verma", role: "Professor, DTU" },
        { name: "Dr. Akash Saxena", role: "Professor, University Of Haryana" },
        { name: "Dr. Shruti Thapar", role: "Associate Professor, PIET, Jaipur" },
        { name: "Dr. Jasdeep Kaur Dhanoa", role: "Professor, IGDTUW" },
        { name: "Mr. Vivek Saxena", role: "Assistant Professor, PIET, Jaipur" },
        { name: "Dr. Monika Agrawal", role: "Associate Professor, IIT, Delhi" },
        { name: "Prof. (Dr.) Rambilas", role: "Professor, IIT Indore" },
        { name: "Dr. Sandeep Gupta", role: "Associate Professor, AI & DS, PIET, Jaipur" },
        { name: "Dr. Dilip Singh Sisodia", role: "Associate Professor, Computer Science & Engineering, National Institute of Technology, Raipur, India" },
      ],
    },
    {
      title: "Editorial Committee",
      members: [
        { name: "Dr. Dinesh Goyal", role: "Professor & Director, PIET, Jaipur" },
      ],
    },
    {
      title: "Keynote Speakers",
      members: [
        { name: "Prof Dharm Singh", role: "Professor & UNESCO Chair Holder Secure on High-performance Computing for Higher Education and Research, Namibia University of Science and Technology" },
        { name: "Dr. J. C. Bansal", role: "Associate Professor, South Asian University, New Delhi" },
        { name: "Dr. Ashish Khanna", role: "Associate professor, CSE Dept, Maharaja Agrasen Institute of Technology" },
        { name: "Dr. Saurabh Sinha", role: "University Of Canterbury" },
        { name: "Dr. Maria Ganzha", role: "Associate Professor, Warsaw University of Technology (Warsaw, Poland)" },
        { name: "Dr. Pooja Jain", role: "Professor, IIIT, Nagpur" },
        { name: "Dr. Enrico Cambiaso", role: "Consiglio Nazionale delle Ricerche (CNR), Genoa, Italy" },
        { name: "Dr. Anshuman Kalla", role: "Centre for Wireless Communications (CWC), University of Oulu, Finland" },
        { name: "Dr. Majusri Misra", role: "Professor & Tier 1 Canada Research Chair (CRC) in Sustainable Biocomposites, University of Guelph, Canada" },
      ],
    },
    {
      title: "Finance Committee",
      members: [
        { name: "Dr. Ajay Maurya", role: "Professor, PIET, Jaipur" },
      ],
    },
    {
      title: "Publicity Chair",
      members: [
        { name: "Dr. Basant Agarwal", role: "Associate Professor, Central University Rajasthan" },
        { name: "Dr. Priya Mathur", role: "PIET, Jaipur" },
        { name: "Dr. Shruti Jain", role: "Professor at Jaypee University of Information Technology, Waknaghat" },
      ],
    },
    {
      title: "International Advisory Committee",
      members: [
        { name: "Aleksandra Mileva", role: "Goce Delcev University STIP, Macedonia" },
        { name: "Carlos M. Travieso", role: "University of Las Palmas de Gran Canaria, Spain" },
        { name: "Armin Aberle", role: "SERIS National University of Singapore, Singapore" },
        { name: "Sedat Akleylek", role: "Ondokuz Mayis University, Samsun, Turkey" },
        { name: "Sureswaran Ramadass", role: "USM University Penang, Malaysia" },
        { name: "Youcef Soufi", role: "University of Tabessa, Algeria" },
        { name: "Lalit Kumar Goel", role: "NTU Nanyang, Singapore" },
        { name: "Pinnamaneni Bhanu", role: "Kelenn Technology Antony, France" },
        { name: "Daniele Riboni", role: "University of Cagliari, Italy" },
        { name: "Wan Young Chung", role: "Pukyong National University Busan, South Korea" },
        { name: "Dr. Sheng-Lung Peng", role: "Prof., National Dong Hua University, Taiwan" },
        { name: "Dr. Ahmed Elngar", role: "Assistant Professor, Egypt" },
      ],
    },
    {
      title: "National Advisory Committee",
      members: [
        { name: "Dr. Rajat Rastogi", role: "Professor, IIT Roorkee" },
        { name: "Dr. C. Periswamy", role: "MNIT, Jaipur" },
        { name: "Dr. Paresh Vallabhbhai Virparia", role: "Professor, SPU" },
        { name: "Dr. Rajesh Kumar", role: "MNIT, Jaipur" },
        { name: "Dr. Arun Kumar Verma", role: "MNIT, Jaipur" },
        { name: "Dr. Rajendra K Asthana", role: "Ex - Director, SDS Softpro (P) Ltd, NOIDA" },
        { name: "Dr. Amit Srivastava", role: "Jaypee University, Greater Noida" },
        { name: "Prof. Anu Gupta", role: "BITS, Pilani" },
        { name: "Dr. Vinod Kumar Chaubey", role: "BITS, Pilani" },
        { name: "Dr. Ravinder Agarwal", role: "Thapar University, Patiala" },
        { name: "Dr. Namita Mittal", role: "MNIT, Jaipur" },
        { name: "Dr. Deepak A. Padhy", role: "Guru Nanak Dev Engineering College, Ludhiana" },
        { name: "Prof. Munish Vohra", role: "C-DAC, Mohali" },
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
