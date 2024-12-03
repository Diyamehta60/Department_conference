import React from "react";

const ConferencePartners = () => {
  const partners = [
    { name: "TechCorp", logo: "https://via.placeholder.com/200x100.png?text=TechCorp+Logo" },
    { name: "DataSolutions", logo: "https://via.placeholder.com/200x100.png?text=DataSolutions+Logo" },
    { name: "InnovateAI", logo: "https://via.placeholder.com/200x100.png?text=InnovateAI+Logo" },
    { name: "NetAnalytics", logo: "https://via.placeholder.com/200x100.png?text=NetAnalytics+Logo" },
    { name: "NextGenTech", logo: "https://via.placeholder.com/200x100.png?text=NextGenTech+Logo" },
    { name: "CloudX", logo: "https://via.placeholder.com/200x100.png?text=CloudX+Logo" },
  ];

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-red-50 to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-12">
          Conference Partners
        </h1>
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Our Esteemed Partners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2"
              >
                <div className="flex justify-center items-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-auto object-contain max-h-32"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">{partner.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConferencePartners;
