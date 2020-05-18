import React from "react";

class PodcasterPage extends React.Component {
  state = {
    teams: [
      {
        nama: "Hennika Arum",
        foto: "./images/henni.jpg",
        desc: "Memiliki hoby ngepoin orang",
        ig: "https://www.instagram.com/hennika9897/",
        tumblr: "",
        twitter: "",
      },
      {
        nama: "Gugun Mediamer",
        foto: "./images/gugun.jpg",
        desc: "Coffee addict and traveler",
        ig: "https://www.instagram.com/gugunmdr/",
        tumblr: "",
        twitter: "https://twitter.com/gugunmdr",
      },
      {
        nama: "Haudifia Dwinda",
        foto: "./images/fia.jpg",
        desc: "Perempuan yang suka bermain kucing",
        ig: "https://www.instagram.com/fiadwindaa/",
        tumblr: "",
        twitter: "https://twitter.com/dwindahadi",
      },
      {
        nama: "Muhamad Ihsan",
        foto: "./images/ihsan.jpg",
        desc: "Manusia dengan 1001 cara untuk mendapatkan apapun",
        ig: "https://www.instagram.com/ihsan.muhamad/",
        tumblr: "",
        twitter: "https://twitter.com/ihsankacang",
      },
    ],
  };

  render() {
    const { teams } = this.state;
    return (
      <div className="podcaster container col-md-5">
        <h2>Here We Are as Your Host</h2>
        <hr></hr>
        {teams.map((team) => (
          <div className="team">
            <img src={team.foto} />
            <h3>{team.nama}</h3>
            <p>{team.desc}</p>
            <div className="sosmed">
              {team.tumblr !== "" ? (
                <a href={team.tumblr} target="_blank">
                  <i class="fa fa-tumblr"></i>
                </a>
              ) : (
                ""
              )}
              {team.ig !== "" ? (
                <a href={team.ig} target="_blank">
                  <i class="fa fa-instagram"></i>
                </a>
              ) : (
                ""
              )}
              {team.twitter !== "" ? (
                <a href={team.twitter} target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PodcasterPage;
