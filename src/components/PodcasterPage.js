import React from 'react';

class PodcasterPage extends React.Component {
    state = {
        teams: [
            {
                nama: "Hennika Arum",
                foto: "./images/henni.jpg",
                desc: "Coffee addict and traveler",
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
                desc: "Fvckboy meen",
                ig: "https://www.instagram.com/fiadwindaa/",
                tumblr: "",
                twitter: ""
            },
            {
                nama: "Muhamad Ihsan",
                foto: "./images/ihsan.jpg",
                desc: "Fvckboy meen",
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
                <h2>From The Podcaster Page</h2>
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