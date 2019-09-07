import React from "react";
import Header from "./Info";

function Speakers() {
  const speakers = [
    {
      name: "Cobus Bernard ",
      image: "/img/speakers/corbus.jpg",
      company: "Senior Technical Evangelist -AWS Sub-Saharan Africa",
      talk: "Modern App Development in the Cloud, Why Service Meshes?"
    },
    {
      name: "Rahul Sharma",
      image: "/img/speakers/rahul.jpg",
      company: "Agile Coach at Think Agile",
      talk: "Know it better, to facilitate it better"
    },
    {
      name: " Dennis Mubamba",
      image: "/img/speakers/dennis.jpg",
      company: "Senior Software Engineer - Mika Express",
      talk: "Actors systems and Asynchronous Software Development"
    },
    {
      name: "Twaambo Haamucenje",
      image: "/img/speakers/twaambo.jpg",
      company: "CTO - Mvesesani Media",
      talk: "Building a Zambian Company and Staying Sane"
    },
    {
      name: "Sekayi Fundafunda Lungu",
      image: "/img/speakers/sekayi.jpg",
      company: "Campus Innovation Lead - BongoHive",
      talk:
        "Creativity for Technology: An interactive session on finding your niche"
    },

    {
      name: "Mwaamba Alec Mugala",
      image: "/img/speakers/mwaamba.jpg",
      company: "Director - EpicArts Studios",
      talk: "The Game Industry - It is time For Africa"
    },

    {
      name: "Chinedu Koggu",
      image: "img/speakers/chinedu.jpg",
      company: "CTO - Probase Limited",
      talk: "Innovative Product Development from Conception to launch"
    },
    {
      name: "Shakerrie Almond",
      image: "img/speakers/shakerrie.jpg",
      company: "Chief Operations Officer - BroadPay",
      talk: "TBD"
    },
    {
      name: "Olivier JM Maniraho",
      image: "img/speakers/olivier.jpg",
      company: "Software Engineer - The ZIG",
      talk: "People, Process and Tools with Azure DevOps"
    }
  ];
  return (
    <>
      <Header />
      <section id="speakers">
        <div className="container">
          <h1 className="text-center">Speakers</h1>
          <div className="row">
            {speakers.map(speaker => (
              <div className="col-sm-6 col-lg-4 p-0" key={speaker.i}>
                <img
                  className="rounded-circle mx-auto d-block img-fluid"
                  src={speaker.image}
                  alt={speaker.name}
                  width="180"
                  height="180"
                />
                <br />
                <div className="speaker-text-div">
                  <h4 className="text-center">{speaker.name}</h4>
                  <h6 className="text-center">{speaker.company}</h6>
                  <p className="text-center">{speaker.talk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Speakers;
