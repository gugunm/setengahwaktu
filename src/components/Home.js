import React from "react";
import axios from "axios";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listEps: [],
      playNoEps: 0,
      activeId: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://anchor.fm/api/v3/profile/1fc5514c"
      )
      .then((res) => {
        this.setState({
          listEps: [...this.state.listEps, ...res.data.episodes],
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  handleClick(event, id) {
    this.setState({ activeId: id });
  }

  replaceNbsps(str) {
    return str.replace(/&nbsp;/g, " ");
  }

  showPlay() {
    const eps = this.state.listEps[this.state.playNoEps];
    const embedLink = "https://anchor.fm" + eps.shareLinkEmbedPath;
    return (
      <div className="play">
        <iframe
          src={embedLink}
          height="102px"
          width="100%"
          frameborder="0"
          scrolling="no"
        ></iframe>
        <p>{eps.descriptionPreview}</p>
        <hr></hr>
        <h2>Playlist</h2>
      </div>
    );
  }

  render() {
    const { listEps } = this.state;
    return (
      <div className="home container col-md-5">
        {listEps.length === 0 ? "" : this.showPlay()}
        <div className="list-eps">
          {listEps.length === 0
            ? ""
            : listEps
                .map((eps, index) => (
                  <div
                    className="eps"
                    onClick={() => {
                      this.setState({ playNoEps: index });
                    }}
                  >
                    <span id="nomor col-sm-2">
                      Eps {listEps.length - index - 1}
                    </span>
                    <a className="episode col-s-9">
                      <p>{eps.title}</p>
                    </a>
                    <span id="btn-play col-sm-1">
                      <i class="fa fa-play"></i>
                    </span>
                  </div>
                ))
                .sort((a, b) => {
                  return listEps.indexOf(a) < listEps.indexOf(b) ? -1 : 1;
                })}
        </div>
      </div>
    );
  }
}

export default HomePage;
