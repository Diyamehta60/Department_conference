import React from "react";

const Publications = () => {
  const publications = [
    {
      title: "Research on Networked Computing in Modern Systems",
      authors: "John Doe, Jane Smith, Alan Walker",
      year: 2024,
      link: "https://example.com/publication1",
      image: "https://via.placeholder.com/200x200.png?text=Publication+1",
      summary: "This paper explores the latest advancements in networked computing and its applications in modern systems, with a focus on scalability and performance.",
    },
    {
      title: "Data Analytics in Cloud Computing Environments",
      authors: "Emily Clark, Mark Wilson",
      year: 2023,
      link: "https://example.com/publication2",
      image: "https://via.placeholder.com/200x200.png?text=Publication+2",
      summary: "A comprehensive study on the use of data analytics in cloud computing environments, emphasizing the importance of real-time data processing.",
    },
    {
      title: "Security Protocols in IoT Networks",
      authors: "John Doe, Mark Wilson",
      year: 2022,
      link: "https://example.com/publication3",
      image: "https://via.placeholder.com/200x200.png?text=Publication+3",
      summary: "An in-depth analysis of security protocols in IoT networks, with practical applications and recommendations for improving security measures.",
    },
    {
      title: "Big Data Processing with Distributed Systems",
      authors: "Jane Smith, Emily Clark",
      year: 2021,
      link: "https://example.com/publication4",
      image: "https://via.placeholder.com/200x200.png?text=Publication+4",
      summary: "This paper presents the challenges and solutions for big data processing using distributed systems and high-performance computing techniques.",
    },
    {
      title: "AI and Machine Learning in Data Analytics",
      authors: "Alan Walker, John Doe",
      year: 2020,
      link: "https://example.com/publication5",
      image: "https://via.placeholder.com/200x200.png?text=Publication+5",
      summary: "A review of AI and machine learning techniques applied to data analytics, focusing on model optimization and prediction accuracy.",
    },
  ];

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-red-50 to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-12">
          Featured Publications
        </h1>
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Recent Research Papers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl bg-white rounded-lg p-6 flex flex-col items-center justify-between shadow-lg"
              >
                <div className="mb-4 flex justify-center items-center">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-40 h-40 object-cover rounded-lg border-4 border-gray-200"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-md font-medium text-gray-600">{publication.authors}</p>
                  <p className="mt-2 text-gray-500">{publication.summary}</p>
                  <div className="mt-4">
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 text-lg font-semibold"
                    >
                      Read Full Paper
                    </a>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Published in {publication.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
