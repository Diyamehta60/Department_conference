import React from "react";

const Committees = () => {
  const committeeData = [
    {
      title: "Honorary Patron",
      members: 
      [
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
      members: 
      [
        {
          name: "Prof. Marcin Paprzycki",
          role: "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland",
        },
        {
          name: "Prof. B.B. Gupta",
          role: "Director, Center for AI & Cyber Security, Asia University, Taichung 413, Taiwan",
        },

      ],
    },
    {
      title: "General Chair",
      members: 
      [
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
      members: 
      [
        {
          name: "Dr. Dinesh Goyal",
          role: "Professor & Director, PIET, Jaipur",
        },
        { name: "Dr. Anil Kumar", role: "Professor & HoD CSE, PIET, Jaipur" },
      ],
    },
    {
      title: "Steering Committee",
      members: 
      [
        {
          name: "Dr. Carlos M. Travieso-Gonzalez",
          role: "Professor, Signals and Communication Department, University of Las Palmas de Gran Canaria, Spain",
        },
        {
          name: "Dr. Nischal Verma",
          role: "Professor,IIT Kanpur",
        },
        {
          name: "Prof. Mike Hinchey ",
          role: "Hinchey Chair UK and Ireland Section IEEE UK",
        },
      ],
    },
    {
      title: "Organising Chair",
      members: 
      [
        
        {
          name: "Dr.Shalini Chaudhary",
          role: "Associate Professor, PIET, Jaipur",
        },
      ],
    },
    {
      title: "Technical Program Chair",
      members: [
        { name: "Prof. (Dr.) Atul Gonsai", role: "Professor, CS, Saurashtra University, Rajkot" },
        { name: "Prof. (Dr.) Bankim Patel", role: "Director, CS, U. T. University, Baroda" },
        { name: "Prof. (Dr.) C. K. Kumbharana", role: "Professor & Head, CS, Saurashtra University, Rajkot" },
        { name: "Prof. (Dr.) Thomas Hanne", role: "Northwestern, Switzerland" },
        { name: "Dr.Aryan Chaudhary", role: "Director & Chief Scientific Advisor,BioTech Sphere Research , India  | Unit of NeoNexus Healthcare Pvt Ltd" },
        { name: "Dr. Manoj Kumar", role: "Professor, Delhi Technical University, Delhi" },
        { name: "Dr. Harish Sharma", role: "Associate Professor, RTU" },
        { name: "Dr. OP Verma", role: "Professor, DTU" },
        { name: "Dr. Akash Saxena", role: "Professor, University Of Haryana" },
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
        { name: "Dr. Adam Belloum", role: "University of Amsterdam" },
        { name: "Dr. Ana Lucia Varbanescu", role: "University of Amsterdam" },
        { name: "Dr. Clemens Grelck", role: "University of Amsterdam" },
        { name: "Dr. Zhiming Zhao", role: "University of Amsterdam" },
        { name: "Dr. Le Hoang Son", role: "Vietnam National University, Taiwan" },
        { name: "Dr. Kuo-Chang Ting", role: "Minghsin University of Science & Technology, Taiwan" },
        { name: "Dr. Cornelia Victoria Anghel Drugarin", role: "Eftimie Murgu University of Reșița, Romania" },
        { name: "Prof. Sheng-Lung Peng", role: "Professor, National Dong Hwa University, Taiwan" },
        { name: "Prof. Ajith Abraham", role: "Machine Intelligence Research, USA" },
        { name: "Prof. Rajveer Singh Shekhawat", role: "Former Professor, CSE, Manipal University, Jaipur" },
        { name: "Prof. S.C. Kulhari", role: "Former Professor CSE, Manipal University, Jaipur" },
        { name: "Prof. S.S Sarangdevot", role: "Vice Chancellor, JRN Rajasthan Vidyapeeth University, Udaipur" },
        { name: "Prof. Do Phuc", role: "University of Information Technology, Ho Chi Minh City, Vietnam" },
        { name: "Prof. Nhu Nguyen Gia", role: "Duy Tan University, Vietnam" },
        { name: "Prof. Dhiren Patel", role: "Gujarat Vidyapeeth University, Ahmedabad" },
        { name: "Prof. M. Hanumanthappa", role: "Professor, CS, Banglore University, Bangalore" },
        { name: "Prof. Manish Shrimali", role: "Professor, CS, Rajasthan Vidyapeeth University, Udaipur" },
        { name: "Mr. Abhishek Dadhich", role: "Assistant Professor, PIET, Jaipur" },
        { name: "Ms. Shikha Gautam", role: "Associate Professor, PIET, Jaipur" },
        { name: "Mr. Vivek Saxena", role: "Assistant Professor, PIET, Jaipur" },
        { name: "Mr. Indra Kishor", role: "Assistant Professor, PIET, Jaipur" },
      ]
    },
    {
      title: "Technichal Program Committee",
      members: [
        { name: "Dr Abdur Rahman", role: "Professor, AITU Almaty, Kazakhstan" },
        { name: "Dr Ameer Rashed Khan", role: "Faculty Member, Sharda University, Uzbekistan" },
        { name: "Dr Ammar Ali Awad Abdeen", role: "Associate Professor, Sudan University, Sudan" },
        { name: "Dr Daniel Jr Dasig", role: "Assistant Professor, Philippine Women's University, Philippines" },
        { name: "Dr Dharm Singh", role: "Professor, Namibia University of Science and Technology, Namibia" },
        { name: "Dr Divya Chaudhary", role: "Assistant Professor, Northeastern University, Seattle, USA" },
        { name: "Dr G R Sinha", role: "Professor, Myanmar Institute of Information Technology, Myanmar" },
        { name: "Dr Marcin Paprzycki", role: "Professor, IBSPAN Warsaw, Poland" },
        { name: "Dr Rabia Mushkbar", role: "Associate Professor, COMSATS University Islamabad, Pakistan" },
        { name: "Dr Rajkumar Buyya", role: "Professor, University of Melbourne, Australia" },
        { name: "Dr Sapna Gambhir", role: "Associate Professor, John Mason University, USA" },
        { name: "Dr Vibhor Kumar", role: "Researcher, Texas A&M University, College Station, Texas, USA" },
        { name: "Dr Wanlei Zhou", role: "Professor, University of Technology Sydney, Australia" },
        { name: "Dr Weiwei Jiang", role: "Professor, Beijing University of Posts and Telecommunications, China" },
        { name: "Dr. Abhinav Dhall", role: "Associate Professor, IIT Ropar, Flinders University, Adelaide, Australia" },
        { name: "Dr. Akshar Patel", role: "Department of Computer Science, City College of New York, New York, NY, USA" },
        { name: "Dr Aastha Joshi", role: "Assistant Professor, Manipal University Jaipur, India" },
        { name: "Dr Abhay Bansal", role: "Professor, Amity University Noida, India" },
        { name: "Dr Abhay Kumar Singh", role: "Professor, National Institute of Technology Patna, India" },
        { name: "Dr Abhinava Tripathi", role: "Associate Professor, IIM Lucknow, India" },
        { name: "Dr Abhishek Bansal", role: "Associate Professor, IPU Engineering College Delhi, India" },
        { name: "Dr Aditi Sharan", role: "Professor, Jawaharlal Nehru University Delhi, India" },
        { name: "Dr Aditya Khamparia", role: "Associate Professor, Babasaheb Bhimrao Ambedkar University Lucknow, India" },
        { name: "Dr Alok Aggarwal", role: "Associate Professor, NIT Kurukshetra, India" },
        { name: "Dr Amit Chandak", role: "Faculty Member, IPS Academy Institute of Engineering and Science Indore, India" },
        { name: "Dr Amit Dhar", role: "Assistant Professor, SVPM College, India" },
        { name: "Dr Anand Gupta", role: "Associate Professor, NSUT, New Delhi, India" },
        { name: "Dr Ananthasai Somasi", role: "Assistant Professor, SVPM College of Engineering, India" },
        { name: "Dr Anshul Verma", role: "Assistant Professor, Banaras Hindu University, India" },
        { name: "Dr Anu G Thomas", role: "Associate Professor, College of Engineering Trivandrum Kerala, India" },
        { name: "Dr Anuj Grover", role: "Associate Professor, IIT Delhi, New Delhi, India" },
        { name: "Dr Arun Kumar", role: "Associate Professor, NIT Hamirpur, India" },
        { name: "Dr Arun Kumar Singh", role: "Assistant Professor, Galgotias University, India" },
        { name: "Dr Ashima Rani", role: "Associate Professor, SGT University, India" },
        { name: "Dr Ashima Singh", role: "Assistant Professor, Thapar University, Patiala, India" },
        { name: "Dr Ashish Sharma", role: "Professor, RTU Kota, India" },
        { name: "Dr Ashok Yadav", role: "Associate Professor, Dayalbagh Educational Institute, Agra, India" },
        { name: "Dr Ashutosh Kumar Singh", role: "Professor, GGSIPU Delhi, India" },
        { name: "Dr Ashwin Dobariya", role: "Professor, Marwadi University, Rajkot (Gujarat), India" },
        { name: "Dr Atul Gonsai", role: "Associate Professor, Saurashtra University Rajkot, India" },
        { name: "Dr Awadhesh Kumar", role: "Professor, NIT Kurukshetra, India" },
        { name: "Dr B Subbulakshmi", role: "Faculty Member, Patrician College of Arts and Science Chennai, India" },
        { name: "Dr Bharat Bhushan Sagar", role: "Professor, BIT Mesra Ranchi, India" },
        { name: "Dr Bhupesh Rawat", role: "Associate Professor, DIT University Dehradun, India" },
        { name: "Dr Brij Gupta", role: "Professor, NIT Kurukshetra, India" },
        { name: "Dr Chandra Prakash", role: "Associate Professor, NIT Hamirpur, India" },
        { name: "Dr Charanjeet Singh", role: "Assistant Professor, Gujranwala Guru Nanak Institute of Management & Technology Ludhiana, India" },
        { name: "Dr Debasish Jena", role: "Professor, NIT Rourkela, India" },
        { name: "Dr Deepak Garg", role: "Professor, Bennett University Greater Noida, India" },
        { name: "Dr Deepika Chauhan", role: "Assistant Professor, Poornima University Jaipur, India" },
        { name: "Dr Devesh Kumar Lal", role: "Associate Professor, Babasaheb Bhimrao Ambedkar University Lucknow, India" },
        { name: "Dr Dhananjay Kumar", role: "Associate Professor, NIT Patna, India" },
        { name: "Dr Dharmendra Chouhan", role: "Associate Professor, JECRC University Jaipur, India" },
        { name: "Dr Dhruv Kumar", role: "Assistant Professor, Jawaharlal Nehru University Delhi, India" },
        { name: "Dr Gour Sunder Mitra", role: "Senior Director, Capgemini India Bengaluru, India" },
        { name: "Dr Hari Kiran Vuddagiri", role: "Associate Professor, GITAM University Visakhapatnam, India" },
        { name: "Dr Heena Wadhwa", role: "Associate Professor, Chandigarh University Mohali, India" },
        { name: "Dr Hussana Johar R B", role: "Faculty Member, ATME College of Engineering Mysore, India" },
        { name: "Dr Jagdish Chand Bansal", role: "Associate Professor, South Asian University, New Delhi, India" },
        { name: "Dr Jajam Nagaraju", role: "Faculty Member, Tirumala Engineering College, India" },
        { name: "Dr John Abraham", role: "Faculty Member, Bharatamata College, India" },
        { name: "Dr Juhi Singh", role: "Assistant Professor, Manipal University Jaipur, India" },
        { name: "Dr Jyoti Sanjay Yadav", role: "Assistant Professor, SVPM College of Engineering, India" },
        { name: "Dr K Dasu Naidu", role: "Assistant Professor (SG), JNTUA, India" },
        { name: "Dr K K Pattanaik", role: "Professor, IIITM Gwalior, India" },
        { name: "Dr K Saravanan", role: "Professor, Vellore Institute of Technology Chennai, India" },
        { name: "Dr Kalaiyarasan A", role: "Faculty Member, Muthayammal Engineering College, India" },
        { name: "Dr Kalpna Srivastava", role: "Professor, Poornima University Jaipur, India" },
        { name: "Dr Kamlesh Dutta", role: "Professor, NIT Hamirpur, India" },
        { name: "Dr Kamlesh Kumar Verma", role: "Assistant Professor, Bundelkhand University Jhansi, India" },
        { name: "Dr Kandula Damodhar Rao", role: "Faculty Member, Sreenidhi Institute of Science and Technology, India" },
        { name: "Dr Karm Veer Arya", role: "Professor, IIITM Gwalior, India" },
        { name: "Dr Karthikeyan R", role: "Faculty Member, SRM Arts and Science College Kattankulathur, India" },
        { name: "Dr Kiran Jyoti", role: "Professor, GNDU Amritsar, India" },
        { name: "Dr Kumod Kumar Gupta", role: "Assistant Professor, NIET, Noida, India" },
        { name: "Dr Lalit Mohan Goyal", role: "Professor, Maharaja Surajmal Institute of Technology Delhi, India" },
        { name: "Dr N Md Jubair Basha", role: "Faculty Member, Kallam Haranadhareddy Institute of Technology, India" },
        { name: "Dr N Rajesh", role: "Professor, KPR Institute of Engineering and Technology, Coimbatore, India" },
        { name: "Dr Namita Mittal", role: "Professor, MNIT Jaipur, India" },
        { name: "Dr Namrata Dhanda", role: "Professor, Amity University UP, India" },
        { name: "Dr Navdeep Dhaliwal", role: "Associate Professor, MCM College Chandigarh, India" },
        { name: "Dr Naveen Sharma", role: "Assistant Professor, Department of Mechanical Engineering, NSUT, New Delhi, India" },
        { name: "Dr Navneet Kaur", role: "Associate Professor, Thapar University Patiala, India" },
        { name: "Dr Neelu Singh", role: "Faculty Member, LNCT MCA Bhopal, India" },
        { name: "Dr Neeraj Tiwari", role: "Associate Professor, Poornima University Jaipur, India" },
        { name: "Dr Neetesh Kumar", role: "Associate Professor, IIT Roorkee, India" },
        { name: "Dr Nidhi Arora", role: "Professor, MRIIRS Faridabad, India" },
        { name: "Dr Nihar Ranjan Roy", role: "Associate Professor and Head, CSE, Vivekanand Institute of Professional Studies, New Delhi, India" },
        { name: "Dr Nishchol Mishra", role: "Professor, MANIT Bhopal, India" },
      ],
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


        { name: "SAURABH MUKHERJEE", role: "BANASTHALI VIDYAPITH" },
        { name: "DR. SHAILENDRA KUMAR MISHRA", role: "REVA UNIVERSITY, BENGALURU" },
        { name: "DR. SHWETA GUPTA", role: "WOXSEN UNIVERSITY, INDIA" },
        { name: "DR. B. K. SWATHI PRASAD", role: "M. S. RAMAIAH UNIVERSITY OF APPLIED SCIENCES" },
        { name: "A. K. VERMA", role: "WESTERN NORWAY UNIVERSITY OF APPLIED SCIENCES, HAUGESUND, NORWAY" },
        { name: "PRASHANT JAMWAL", role: "NAZARBAYEV UNIVERSITY, KAZAKHSTAN" },
        { name: "ABDEL SALAM GOMAA", role: "DEPARTMENT OF MATHEMATICS, STATISTICS AND PHYSICS, COLLEGE OF ART AND SCIENCES, QATAR UNIVERSITY, DOHA" },
        { name: "ABOUL ELLA HASSANIEN", role: "CAIRO UNIVERSITY, EGYPT" },
        { name: "ALI GHARSALLAH", role: "UNIT OF RESEARCH IN HIGH FREQUENCY ELECTRONIC CIRCUITS AND SYSTEMS, TUNIS, TUNISIA" },
        { name: "ALI MIRJALILI", role: "TORRENS UNIVERSITY, AUSTRALIA" },
        { name: "ALOK KANTI DEB", role: "INDIAN INSTITUTE OF TECHNOLOGY, KHARAGPUR" },
        { name: "ANAND PAUL", role: "KYUNGPOOK NATIONAL UNIVERSITY, SOUTH KOREA" },
        { name: "ANIMA JOHARI", role: "SCIENTIST, SERB" },
        { name: "ANIRUDDHA CHANDRA", role: "NIT DURGAPUR" },
        { name: "ANUPAM YADAV", role: "NATIONAL INSTITUTE OF TECHNOLOGY, JALANDHAR" },
        { name: "ANURADHA RANASINGHE", role: "LIVERPOOL HOPE UNIVERSITY, UK" },
        { name: "ARUNA TIWARI", role: "INDIAN INSTITUTE OF TECHNOLOGY, INDORE" },
        { name: "ASHVINI CHATURVEDI", role: "NIT SURATKAL" },
        { name: "ATULYA K. NAGAR", role: "LIVERPOOL HOPE UNIVERSITY, UK" },
        { name: "AYAN KUMAR BANDYOPADHYAY", role: "CEERI, PILANI" },
        { name: "CARLOS E. PALAU", role: "ETSI TELECOMMUNICATION, UPV, CAMINO DE VERA, SPAIN" },
        { name: "COSTIN BADICA", role: "UNIVERSITY OF CRAIOVA, DOLJ, ROMANIA" },
        { name: "DAN SIMON", role: "CLEVELAND STATE UNIVERSITY, USA" },
        { name: "PAVITHRA M", role: "VELLORE INSTITUTE OF TECHNOLOGY" },
        { name: "PRACHI GOEL", role: "GGSIPU" },
        { name: "PRAVEEN KUMAR MYAKALA", role: "INDEPENDENT RESEARCHER" },
        { name: "PRERNA AGRAWAL", role: "GLS UNIVERSITY" },
        { name: "PRIYANKA SHARMA", role: "POORNIMA UNIVERSITY JAIPUR" },
        { name: "PROF.(DR.) PRIYANKA MISHRA", role: "POORNIMA UNIVERSITY" },
        { name: "RABINA BAGGA", role: "CGC MOHALI" },
        { name: "RAGHAVENDAR NELLIKONDI", role: "TEKORG INC" },
        { name: "RAHUL THAKUR", role: "MEDI-CAPS UNIVERSITY" },
        { name: "RAJ SHARMA", role: "GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY" },
        { name: "RAJESH G", role: "NEW HORIZON COLLEGE OF ENGINEERING" },
        { name: "RAJVEER SHEKHAWAT", role: "MANIPAL UNIVERSITY JAIPUR" },
        { name: "RAKESH RANJAN SUKLA", role: "BREAD FINANCIAL" },
        { name: "RAMESH SOMAYAJULA", role: "T-MOBILE USA INC" },
        { name: "RANJIT SINGH", role: "NITTTR" },
        { name: "RASHI KOHLI", role: "IEEE" },
        { name: "RAVI MISHRA", role: "GHRIET" },
        { name: "RAVITEJA GUNTUPALLI", role: "DELOITTE CONSULTING" },
        { name: "REETIKA KERKETTA", role: "MIT ADT UNIVERSITY PUNE" },
        { name: "RIPAL RANPARA", role: "MARWADI UNIVERSITY" },
        { name: "RITAM DUTTA", role: "POORNIMA INSTITUE ENGINEERING & TECHNOLOGY" },
        { name: "ROBIN ROHIT", role: "PRESIDENCY UNIVERSITY" },
        { name: "ROHIT MUTHYALA", role: "ZOOMINFO TECHNOLOGIES LLC" },
        { name: "ROHIT DHAWAN", role: "AMAZON.COM" },
        { name: "RUPAL GUPTA", role: "TEERTHANKER MAHAVEER UNIVERSITY" },
        { name: "SAI VINOD VANGAVOLU", role: "CVS PHARMACY" },
        { name: "SAKET CHAUDHARI", role: "TRINET" },
        { name: "SAKTHIVEL V", role: "VELLORE INSTITUTE OF TECHNOLOGY, CHENNAI" },
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
