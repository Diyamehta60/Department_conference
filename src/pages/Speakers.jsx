import React from "react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Dharam singh",
      title: "Professor of Computer Science",
      image: "/gallery/special_sessions_old/ASHISH.jpg",
      bio: "Dr. John Doe is a leading researcher in Networked Computing and has published over 50 papers in renowned journals.",
    },
    // {
    //   name: "Dr. Jane Smith",
    //   title: "CEO of InnovateAI",
    //   image: "/gallery/special_sessions_old/ASuresh.jpg",
    //   bio: "Dr. Jane Smith has over 20 years of experience in AI and Data Analytics, pioneering advancements in machine learning models.",
    // },
    // {
    //   name: "Prof. Alan Walker",
    //   title: "Head of Data Science at DataSolutions",
    //   image: "/gallery/special_sessions_old/Udendhran.jpg",
    //   bio: "Prof. Alan Walker is a distinguished educator and industry expert in data science, specializing in big data processing.",
    // },
    
  ];

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-b from-red-50 to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-12">
          Our Esteemed Speakers
        </h1>
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Meet the Experts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2"
              >
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-40 h-40 object-cover rounded-full border-4 border-gray-200"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-red-700">{speaker.name}</h3>
                  <p className="text-lg font-medium text-gray-600">{speaker.title}</p>
                  <p className="mt-2 text-gray-500">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Speakers;
