import React from "react";

const Committees = () => {
  const committeeData = [
    {
      title: "Honorary Patron",
      members: [
        {
          name: "Mr. Hari Singh",
          role: "Director (Infrastructure), Poornima Group, Jaipur",
        },
        {
          name: "Mr. MKM Shah",
          role: "Director (Admin & Finance), Poornima Group, Jaipur",
        },
      ],
    },
    {
      title: "Honorary Chair",
      members: [
        {
          name: "Prof. Marcin Paprzycki",
          role: "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland",
        },
        {
          name: "Prof. B.B. Gupta",
          role: "Director, Center for AI & Cyber Security, Asia University, Taichung 413, Taiwan",
        },
        {
          name: "Dr. Sugandha Singh",
          role: "Dean-Faculty of Engineering and Technology and Prof - CSE(SGTU) Gurugram",
        },
      ],
    },
    {
      title: "General Chair",
      members: [
        {
          name: "Prof. Dharam Singh",
          role: "Namibia University of Science & Tech., Namibia",
        },
        {
          name: "Dr. JC Bansal",
          role: "Professor, South Asian University",
        },
      ],
    },
    {
      title: "Conference Chair",
      members: [
        {
          name: "Dr. Dinesh Goyal",
          role: "Professor & Director, PIET, Jaipur",
        },
        { name: "Dr. Anil Kumar", role: "Professor & HoD CSE, PIET, Jaipur" },
      ],
    },
    {
      title: "Steering Committee",
      members: [
        {
          name: "Dr. Carlos M. Travieso-Gonzalez",
          role: "Professor, Signals and Communication Department, University of Las Palmas de Gran Canaria, Spain",
        },
        {
          name: "Dr. Amit Joshi",
          role: "CEO, GR Foundation Ahmedabad",
        },
        {
          name: "Prof. Mike Hinchey ",
          role: "Hinchey Chair UK and Ireland Section IEEE UK",
        },
      ],
    },
    {
      title: "Conference Co-Chair",
      members: [
        
        {
          name: "Dr. Balwan Shesma",
          role: "Associate Professor, PIET, Jaipur",
        },
      ],
    },
    {
      title: "Organising Chair",
      members: [
        {
          name: "Dr. Sanjay Kumar Sinha",
          role: "Associate Professor, PIET, Jaipur",
        },
        {
          name: "Dr. Navin Kumar Goyal",
          role: "Associate Professor, PIET, Jaipur",
        },
        {
          name: "Dr. Shalini Choudhary",
          role: "Associate Professor, PIET, Jaipur",
        },
        {
          name: "Dr. Shruti Thapar",
          role: "Associate Professor, PIET, Jaipur",
        },
      ],
    },
    {
      title: "Technical Program Chair",
      members: [
        { name: "Prof. (Dr.) Atul Gonsai", role: "Professor, CS, Saurashtra University, Rajkot" },
        { name: "Prof. (Dr.) Baldev Singh", role: "Principal, VGU, Jaipur" },
        { name: "Prof. (Dr.) Bankim Patel", role: "Director, CS, U. T. University, Baroda" },
        { name: "Prof. (Dr.) C. K. Kumbharana", role: "Professor & Head, CS, Saurashtra University, Rajkot" },
        { name: "Prof. (Dr.) Deepshikha Bhargava", role: "Professor, CS, Amity University, Noida" },
        { name: "Prof. (Dr.) Thomas Hanne", role: "Northwestern, Switzerland" },
        { name: "Dr. Manoj Kumar", role: "Professor, Delhi Technical University, Delhi" },
        { name: "Dr. Harish Sharma", role: "Associate Professor, RTU" },
        { name: "Dr. OP Verma", role: "Professor, DTU" },
        { name: "Dr. Akash Saxena", role: "Professor, University Of Haryana" },
        { name: "Dr. Shruti Thapar", role: "Associate Professor, PIET, Jaipur" },
        { name: "Dr. Jasdeep Kaur Dhanoa", role: "Professor, IGDTUW" },
        { name: "Dr. Monika Agrawal", role: "Associate Professor, IIT, Delhi" },
        { name: "Dr. Sandeep Gupta", role: "Associate Professor, AI & DS, PIET, Jaipur" },
        { name: "Dr. Dilip Singh Sisodia", role: "Associate Professor, Computer Science & Engineering, National Institute of Technology, Raipur, India" },
        { name: "Dr. Meenakshi Tripathi", role: "Associate Professor, CSE, MNIT, Jaipur" },
        { name: "Dr. D.N. Goswami", role: "Director, CS, Jiwaji University, Gwalior" },
        { name: "Dr. P. V. Virparia", role: "Professor, CS, Sardar Patel University, Gujarat" },
        { name: "Dr. Ramesh C. Poonia", role: "Christ University, Bengaluru" },
        { name: "Dr. Sunil Kumar Muttu", role: "Former Professor, CS, University of Delhi, Delhi" },
        { name: "Dr. Vinod Kumar Sharma", role: "Professor, CS, University of Jammu, Jammu" },
        { name: "Dr. Nisheeth Joshi", role: "Banasthali Vidyapeeth, Newai" },
        { name: "Dr. Reena Dadhich", role: "Professor & Head, University of Kota, Kota" },
        { name: "Dr. P.C Gupta", role: "University of Kota, Kota" },
        { name: "Dr. Neeraj Bhargava", role: "Professor & Head, MDS University, Ajmer" },
        { name: "Dr. Hardayal Singh Shekhawat", role: "Professor, GEC, Bikaner" },
        { name: "Dr. Narpat Singh Shekhawat", role: "Professor & Head - CSE, GEC, Bikaner" },
        { name: "Dr. Neetu Sharma", role: "Ass. Professor, GEC, Ajmer" },
        { name: "Dr. Nishtha Keswani", role: "Associate Professor, Central University of Rajasthan, Kishangarh" },
        { name: "Dr. Mukesh Gupta", role: "Professor, CSE, SKIT, Jaipur" },
        { name: "Dr. Aman Jain", role: "Professor, MAISM, Jaipur" },
        { name: "Dr. Kirti Seth", role: "Associate Professor, SOCIE, Inha University, Tashkent, Uzbekistan" },
        { name: "Dr. Dharam Singh", role: "Namibia University of Science and Technology, Namibia" },
        { name: "Dr. Adam Belloum", role: "University of Amsterdam" },
        { name: "Dr. Ana Lucia Varbanescu", role: "University of Amsterdam" },
        { name: "Dr. Clemens Grelck", role: "University of Amsterdam" },
        { name: "Dr. Zhiming Zhao", role: "University of Amsterdam" },
        { name: "Dr. Le Hoang Son", role: "Vietnam National University, Taiwan" },
        { name: "Dr. Kuo-Chang Ting", role: "Minghsin University of Science & Technology, Taiwan" },
        { name: "Dr. Cornelia Victoria Anghel Drugarin", role: "Eftimie Murgu University of Reșița, Romania" },
        { name: "Prof. Sheng-Lung Peng", role: "Professor, National Dong Hwa University, Taiwan" },
        { name: "Prof. V.S. Dhaka", role: "Professor & Head IT, Manipal University, Jaipur" },
        { name: "Prof. Ajith Abraham", role: "Machine Intelligence Research, USA" },
        { name: "Prof. Anoop Singh Poonia", role: "Chairman, RIET, Jaipur" },
        { name: "Prof. Prashant Sahai Saxena", role: "Director-DE, JECRC University, Jaipur" },
        { name: "Prof. Rajveer Singh Shekhawat", role: "Former Professor, CSE, Manipal University, Jaipur" },
        { name: "Prof. S.C. Kulhari", role: "Former Professor CSE, Manipal University, Jaipur" },
        { name: "Prof. S.S Sarangdevot", role: "Vice Chancellor, JRN Rajasthan Vidyapeeth University, Udaipur" },
        { name: "Prof. Do Phuc", role: "University of Information Technology, Ho Chi Minh City, Vietnam" },
        { name: "Prof. Nhu Nguyen Gia", role: "Duy Tan University, Vietnam" },
        { name: "Prof. Valentina Balas", role: "Auriel University, Romania" },
        { name: "Mr. Abhishek Dadhich", role: "Assistant Professor, PIET, Jaipur" },
        { name: "Ms. Shikha Gautam", role: "Associate Professor, PIET, Jaipur" },
        { name: "Mr. Vivek Saxena", role: "Assistant Professor, PIET, Jaipur" },
        { name: "Mr. Indra Kishor", role: "Assistant Professor, PIET, Jaipur" },
        { name: "Mr. Amit Joshi", role: "Director, GR Foundation, Ahmedabad" },
        { name: "Prof. Dhiren Patel", role: "Gujarat Vidyapeeth University, Ahmedabad" },
        { name: "Prof. Dinesh Goyal", role: "Director Engineering, PIET, Jaipur" },
        { name: "Prof. M. Hanumanthappa", role: "Professor, CS, Banglore University, Bangalore" },
        { name: "Prof. Manish Shrimali", role: "Professor, CS, Rajasthan Vidyapeeth University, Udaipur" }
      ]
      
    },
    {
      title: "Editorial Committee",
      members: [
        {
          name: "Dr. Dinesh Goyal",
          role: "Professor & Director, PIET, Jaipur",
        },
        { name: "Dr. Anil Kumar", role: "Professor & HoD CSE, PIET, Jaipur" },
        {
          name: "Prof. Milan Tuba",
          role: "Head, AI, Singidunum University & Vice-Rector, Research at Sinergia University, Belgrade",
        },
      ],
    },
    {
      title: "Keynote Speakers",
      members: [
        {
          name: "Prof. Mike Hinchey Chair",
          role: "UK and Ireland Section IEEE UK",
        },
        {
          name: "Prof. Joao Manuel RS Tavares",
          role: "University of Porto, Portugal",
        },
        {
          name: "Prof. Milan Tuba",
          role: "Head, AI, Singidunum University & Vice-Rector, Research at Sinergia University, Belgrade",
        },
        {
          name: "Prof. Rosalina Babo",
          role: "Professor, Polytechnic Institute of Porto, Portugal",
        },
        {
          name: "Dr. Eva Tuba",
          role: "Assistant Professor, Computer Science, Trinity University, San Antonio, TX, USA",
        },
        {
          name: "Prof. Vincenzo Piuri",
          role: "University of Milano, Italy",
        },
        {
          name: "Prof. Zdzislaw Polkowski",
          role: "Professor and Rector's Representative for International Cooperation, WSG University Bydgoszcz, Poland",
        },
        {
          name: "Prof. Gabriel Kabanda",
          role: "Adjunct Professor, Machine Learning, Woxsen University, Hyderabad",
        },
        {
          name: "Dr. Vladan Devedzic",
          role: "Professor, Department of Software Engineering, University of Belgrade, Serbia",
        },
        {
          name: "Prof. Marcel Worring",
          role: "Professor & Director, Informatics Institute, University of Amsterdam, Netherlands",
        },
        {
          name: "Prof. Francesca Di Virgilio",
          role: "Professor, University of Molise, Italy",
        },
        {
          name: "Prof. Patrizia Pucci",
          role: "Professor, Department of Mathematics and Informatics, University of Perugia, Perugia, Italy",
        },
        {
          name: "Prof. Valentina Emilia Balas",
          role: "Professor, Engineering, Aurel Vlaicu University Of Arad, Romania",
        },
        {
          name: "Dr. Daniel D. Dasig Jr. PCpE",
          role: "Head, Research Ethics Unit, De La Salle-College of Saint Benilde, Manila, Philippines",
        },
      ],
    },
    {
      title: "Finance Committee",
      members: [
        {
          name: "Dr. Sanjay Kumar Sinha",
          role: "Associate Professor, PIET, Jaipur",
        },
        {
          name: "Mr. Nitin Phulwani",
          role: "Associate Professor, PIET, Jaipur",
        },
        {
          name: "Ms. Ashima Tiwari",
          role: "Associate Professor, PIET, Jaipur",
        },
      ],
    },
    {
      title: "Publicity Chair",
      members: [
        {
          name: "Dr. Basant Agarwal",
          role: "Associate Professor, Central University Rajasthan",
        },
        {
          name: "Ms. Bersha Kumari",
          role: "Associate Professor, PIET Jaipur",
        },
        {
          name: "Dr. Shruti Jain",
          role: "Professor at Jaypee University of Information Technology, Waknaghat",
        },
      ],
    },
    {
      title: "Advisory Committee",
      members: [
        {
          name: "Saurabh Mukherjee",
          role: "Banasthali Vidyapith",
        },
        {
          name: "Dr. Shailendra Kumar Mishra",
          role: "REVA UNIVERSITY, Bengaluru",
        },
        {
          name: "Dr. Shweta Gupta",
          role: "Woxsen University, India",
        },
        {
          name: "Dr. BK Swathi Prasad",
          role: "MS Ramaiah University of Applied Sciences",
        },
        {
          name: "A K Verma",
          role: "Western Norway University of Applied Sciences, Haugesund, Norway",
        },
        {
          name: "Prashant Jamwal",
          role: "Nazarbayev University, Kazakhstan",
        },
        {
          name: "Abdel Salam Gomaa",
          role: "Department of Mathematics, Statistics and Physics, College of Art and Sciences, Qatar University, Doha",
        },
        {
          name: "Aboul Ella Hassanien",
          role: "Cairo University, Egypt",
        },
        {
          name: "Ali Gharsallah",
          role: "Unit of Research in High Frequency Electronic Circuits and Systems, Tunis, Tunisia",
        },
        {
          name: "Ali Mirjalili",
          role: "Torrens University, Australia",
        },
        {
          name: "Alok Kanti Deb",
          role: "Indian Institute of Technology, Kharagpur",
        },
        {
          name: "Anand Nayyar",
          role: "Scientist, Graduate School, Duy Tan University, Da Nang, Viet Nam",
        },
        {
          name: "Anand Paul",
          role: "Kyungpook National University, South Korea",
        },
        {
          name: "Anima Johari",
          role: "Scientist, SERB",
        },
        {
          name: "Aniruddha Chandra",
          role: "NIT Durgapur",
        },
        {
          name: "Anupam Yadav",
          role: "National Institute of Technology, Jalandhar",
        },
        {
          name: "Anuradha Ranasinghe",
          role: "Liverpool Hope University, UK",
        },
        {
          name: "Aruna Tiwari",
          role: "Indian Institute of Technology, Indore",
        },
        {
          name: "Ashvini Chaturvedi",
          role: "NIT Suratkal",
        },
        {
          name: "Atulya K. Nagar",
          role: "Liverpool Hope University, UK",
        },
        {
          name: "Ayan Kumar Bandyopadhyay",
          role: "CEERI, Pilani",
        },
        {
          name: "Carlos E. Palau",
          role: "ETSI Telecommunication, UPV, Camino de Vera, Spain",
        },
        {
          name: "Costin Badica",
          role: "University of Craiova, Dolj, Romania",
        },
        {
          name: "Dan Simon",
          role: "Cleveland State University, USA",
        },
        {
          name: "Debasish Ghose",
          role: "IISc Bangalore",
        },
        {
          name: "Deepak Garg",
          role: "Bennett University, India",
        },
        {
          name: "Dr. Amit Singhal",
          role: "Bennett University, Greater Noida",
        },
        {
          name: "Dr. Mahfuzul H Huda",
          role: "Saudi Electronic University",
        },
        {
          name: "Dumitru Baleanu",
          role: "Cankaya University",
        },
        {
          name: "Jaisingh Thangaraj",
          role: "Assistant Professor, IIT Dhanbad, Jharkhand",
        },
        {
          name: "K. S. Nisar",
          role: "Riyadh, Saudi Arabia",
        },
        {
          name: "Kamran Iqbal",
          role: "University of Arkansas at Little Rock, Little Rock, Arkansas, United States",
        },
        {
          name: "Kuldeep Singh",
          role: "MNIT, Jaipur",
        },
        {
          name: "Kusum Deep",
          role: "Indian Institute of Technology, Roorkee, India",
        },
        {
          name: "Lalit Lumar Goyal",
          role: "NTU Nanyang, Singapore",
        },
        {
          name: "Manoj K. Shukla",
          role: "Harcourt Butler Technical University, Kanpur",
        },
        {
          name: "Manoj Thakur",
          role: "IIT Mandi",
        },
        {
          name: "Marcin Paprzycki",
          role: "Polish Academy of Sciences, Warsaw, Poland",
        },
        {
          name: "Miodrag Potkonjak",
          role: "UCLA, Los Angeles, USA",
        },
        {
          name: "Mohd Muntjir",
          role: "Taif University, Kingdom of Saudi Arabia",
        },
        {
          name: "Neetesh Purohit",
          role: "IIIT Allahabad",
        },
        {
          name: "Nilanjan Dey",
          role: "Techno India College of Technology, India",
        },
        {
          name: "Nishchal K. Verma",
          role: "Indian Institute of Technology, Kanpur, India",
        },
        {
          name: "Nooritawati Md Tahir",
          role: "University Technology MARA (UiTM), Malaysia",
        },
        {
          name: "Preetam Kumar",
          role: "IIT, Patna",
        },
        {
          name: "Prena Gaur",
          role: "NSUT, Dwarka, New Delhi",
        },
        {
          name: "Priti Srinivas Sajja",
          role: "Sardar Patel University, Vallabh Vidyanagar, Gujarat",
        },
        {
          name: "Pushpendra Singh",
          role: "NIT Hamirpur",
        },
        {
          name: "R. P. Yadav",
          role: "MNIT Jaipur",
        },
        {
          name: "R. Gangopadhyay",
          role: "LNMIIT, Jaipur",
        },
        {
          name: "Rajveen Chandel",
          role: "NIT Hamirpur",
        },
        {
          name: "S. Sundaram",
          role: "IISc Bangalore",
        },
        {
          name: "Sandeep Sancheti",
          role: "SRM University, India",
        },
        {
          name: "Sanjay Singh",
          role: "CEERI, Pilani",
        },
        {
          name: "Sanjeev Yadav",
          role: "GWEC, Ajmer",
        },
        {
          name: "Sanyog Rawat",
          role: "Manipal University, Jaipur",
        },
        {
          name: "Seemanti Saha",
          role: "NIT Patna",
        },
        {
          name: "Shashi Shekhar Jha",
          role: "IIT Ropar",
        },
        {
          name: "Sudhir Kumar",
          role: "IIT Patna",
        },
        {
          name: "Suneeta Agrawal",
          role: "Motilal Nehru National Institute of Technology, Allahabad",
        },
        {
          name: "Surajit Kundu",
          role: "NIT, Sikkim",
        },
        {
          name: "Sureswaran Ramadass",
          role: "USM University, Penang, Malaysia",
        },
        {
          name: "Sushmita Das",
          role: "NIT, Rourkela",
        },
        {
          name: "Swagatam Das",
          role: "Indian Statistical Institute, Kolkata, India",
        },
        {
          name: "T. Rama Rao",
          role: "SRM Institute of Science & Technology, Chennai",
        },
        {
          name: "Vimal Bhatia",
          role: "IIT Indore",
        },
        {
          name: "Wan Young Chung",
          role: "Pukyong National University, Busan, South Korea",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 mt-14 to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-12">
          Committees
        </h1>
        {committeeData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-red-500 mb-8">
              {section.title}
            </h2>
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
