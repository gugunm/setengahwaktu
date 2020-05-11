import React from 'react';

class PodcasterPage extends React.Component {
    state = {
        teams: [
            {
                nama: "Hennika Arum",
                foto: "./images/henni.jpg",
                desc: "Memiliki hoby ngepoin orang",
                ig: "https://www.instagram.com/hennika9897/",
                tumblr: "http://henniarum.tumblr.com/",
                twitter: ""
            },
            {
                nama: "Gugun Mediamer",
                foto: "./images/gugun.jpg",
                desc: "Coffee addict and traveler",
                ig: "https://www.instagram.com/gugunmdr/",
                tumblr: "http://gugunm.tumblr.com/",
                twitter: "https://twitter.com/gugunmdr"
            },
            {
                nama: "Haudifia Dwinda",
                foto: "./images/fia.jpg",
                desc: "Perempuan yang suka bermain kucing",
                ig: "https://www.instagram.com/fiadwindaa/",
                tumblr: "",
                twitter: ""
            },
            {
                nama: "Muhamad Ihsan",
                foto: "./images/ihsan.jpg",
                desc: "Manusia dengan 1001 cara untuk mendapatkan apapun",
                ig: "https://www.instagram.com/ihsanmuhamad/",
                tumblr: "",
                twitter: ""
            }
        ]
    }

    render() {
        const {teams} = this.state
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
                            <a href={team.tumblr} target="_blank"><i class="fa fa-tumblr"></i></a>
                            <a href={team.ig} target="_blank"><i class="fa fa-instagram"></i></a>
                            <a href={team.twitter} target="_blank"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
};

export default PodcasterPage;