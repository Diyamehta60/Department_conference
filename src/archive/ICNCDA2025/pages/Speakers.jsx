import React from "react";

const Speakers = () => {
  const speakers = [
    {
        "name": "Prof. Mike Hinchey Chair",
        "designation": "UK and Ireland Section IEEE UK",
        "image": "/keynote_speakers/mikehinchey.png",
        "id": "1",
        "national": true
    },
    {
        "name": "Prof. Joao Manuel RS Tavares",
        "designation": "University of Porto, Portugal",
        "image": "/keynote_speakers/jao manuel.png",
        "id": "2",
        "national": false
    },
    {
        "name": "Prof. Milan Tuba",
        "designation": "Head, AI, Singidunum University & Vice-Rector, Research at Sinergia University, Belgrade",
        "image": "/keynote_speakers/milantuba.png",
        "id": "3",
        "national": false
    },
    {
        "name": "Prof. Rosalina Babo",
        "designation": "Professor, Polytechnic Institute of Porto, Portugal",
        "image": "/keynote_speakers/rosalina.png",
        "id": "4",
        "national": false
    },
    {
        "name": "Dr. Eva Tuba",
        "designation": "Assistant Professor, Computer Science, Trinity University, San Antonio, TX, USA",
        "image": "/keynote_speakers/Eva_Tuba.png",
        "id": "5",
        "national": false
    },
    {
        "name": "Prof. Vincenzo Piuri",
        "designation": "University of Milano, Italy",
        "image": "/keynote_speakers/vincenzopuri.png",
        "id": "6",
        "national": false
    },
    {
        "name": "Prof. Zdzislaw Polkowski",
        "designation": "Professor and Rector's Representative for International Cooperation, WSG University Bydgoszcz, Poland",
        "image": "/keynote_speakers/Zdzislaw.png",
        "id": "7",
        "national": false
    },
    {
        "name": "Prof. Gabriel Kabanda",
        "designation": "Adjunct Professor, Machine Learning, Woxsen University, Hyderabad",
        "image": "/keynote_speakers/Gabriel Kabanda.png",
        "id": "8",
        "national": true
    },
    {
        "name": "Dr. Vladan Devedzic",
        "designation": "Professor, Department of Software Engineering, University of Belgrade, Serbia",
        "image": "/keynote_speakers/Vladan Devedzic.png",
        "id": "9",
        "national": false
    },
    {
        "name": "Prof. Marcel Worring",
        "designation": "Professor & Director, Informatics Institute, University of Amsterdam, Netherlands",
        "image": "/keynote_speakers/Prof. Marcel Worring.png",
        "id": "10",
        "national": false
    },
    {
        "name": "Prof. Francesca Di Virgilio",
        "designation": "Professor, University of Molise, Italy",
        "image": "/keynote_speakers/Prof. Francesca Di Virgilio.png",
        "id": "11",
        "national": false
    },
    {
        "name": "Prof. Patrizia Pucci",
        "designation": "Professor, Department of Mathematics and Informatics, University of Perugia, Perugia, Italy",
        "image": "/keynote_speakers/Prof. Patrizia Pucci.png",
        "id": "12",
        "national": false
    },
    {
        "name": "Prof. Valentina Emilia Balas",
        "designation": "Professor, Engineering, Aurel Vlaicu University Of Arad, Romania",
        "image": "/keynote_speakers/valentina.png",
        "id": "13",
        "national": false
    },
    {
        "name": "Dr. Daniel D. Dasig Jr. PCpE",
        "designation": "Head, Research Ethics Unit, De La Salle-College of Saint Benilde, Manila, Philippines",
        "image": "/keynote_speakers/Daniel-Dasig.png",
        "id": "14",
        "national": false
    },
    {
        "name": "Rakesh M. Verma",
        "designation": "Professor of Computer Science at University Of Houston ,Director of ReDAS Lab",
        "image": "/keynote_speakers/Rakesh.jpg",
        "id": "15",
        "national": false
    }
];

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-b from-red-50 to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-12">
        Proposed Keynote Speakers
        </h1>
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2"
              >
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={speaker.image}
                    
                    className="w-40 h-40 object-cover rounded-full border-4 border-gray-200"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-red-700">{speaker.name}</h3>
                  <p className="mt-2 text-gray-500">{speaker.designation}</p>
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
