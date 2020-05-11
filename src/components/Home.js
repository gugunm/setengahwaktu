import React from 'react';

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listEps : [],
            playNoEps : 0
        }
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://anchor.fm/setengahwaktu/')
        .then((response) => response.text())
        .then(html => {
            const parser = new DOMParser();
            const body = parser.parseFromString(html, 'text/html');

            // let docBody = doc.querySelectorAll(".styles__episodeFeedItem___1U6E2 .styles__episodeImage___tMifW")[0].pathname // #corona-fitur .corona-positif .feature-subtitle") 
            const docEpisodes = body.querySelectorAll(".styles__episodeFeedItem___1U6E2")
            const embedLink = "https://anchor.fm/setengahwaktu/embed/"

            // tampung dalam list
            const episodes = []
            docEpisodes.forEach((episode) => {
                const judulEps = episode.querySelector(".styles__episodeHeading___29q7v div").innerHTML
                const linkEps = episode.querySelector("a.styles__episodeImage___tMifW").pathname
                // const embedEps = embedLink + linkEps.substring(13)
                const embedEps = embedLink + linkEps.substring(15)
                let descEps = episode.querySelector("div.styles__expander___1NNVb div").innerHTML
                descEps = this.replaceNbsps(descEps)
                episodes.push({
                    judul: judulEps,
                    link: embedEps,
                    desc: descEps
                })
            })

            this.setState({
                listEps: [
                    ...this.state.listEps,
                    ...episodes
                ]
            })
        });
    }

    replaceNbsps(str) {
        return str.replace(/&nbsp;/g, ' ');
    }
    
    showPlay() {
        const eps = this.state.listEps[this.state.playNoEps]
        return (
            <div className="play">
                <iframe src={eps.link} height="102px" width="100%" frameborder="0" scrolling="no"></iframe>
                <p>{eps.desc}</p>
                <hr></hr>
                <h2>Playlist</h2>
            </div>
        )
    }

    render() {
        const { listEps } = this.state;
        console.log(listEps)
        return(
            <div className="home container col-md-5">
                { listEps.length === 0 ? console.log("Kosong") : this.showPlay() }
                <div className="list-eps">
                    { listEps.length === 0 ? console.log("Kosong") : 
                        listEps.map((eps, index) =>(
                            <div className="eps" onClick={() => {this.setState({ playNoEps: index})}}>
                                <span id="nomor col-sm-1">Eps. {index+1}</span>
                                <a className="episode col-sm-10" >
                                    <p>{eps.judul}</p>
                                </a>
                                <span id="btn-play col-sm-1">
                                    <i class="fa fa-play"></i>
                                </span>
                            </div>
                        )
                    ).sort((a, b) => {
                        return listEps.indexOf(a) < listEps.indexOf(b) ? 1 : -1;
                    })
                    }
                </div>
            </div>
        );
    }
};

export default HomePage;