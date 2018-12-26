import React, {
  Component
} from "react";
import VideoPlayerLayout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from "../components/timer.js";
import Controls from "../components/video-player-controls.js";
import formattedTime from "../../util/timer";
import ProgressBar from "../components/progress-bar";
import Spinner from "../components/spinner";
import Volume from "../components/volume";
import FullScreen from "../components/full-screen";
import { connect } from 'react-redux';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    onOff: 1
  };
  togglePlay = event => {
    this.setState({
      // pause sera lo contario a lo definido
      pause: !this.state.pause
    });
  };
  // comienza a cargar
  handleSeeking = event => {
    this.setState({
      loading: true
    });
  };
  // deja de cargar
  handleSeeked = event => {
    this.setState({
      loading: false
    });
  };
  // componente montado validar play/pause
  componentDidMount() {
    this.setState({
      // si se cumple es true sino es false
      pause: !this.props.autoplay
    });
  }
  handleLoadedMetadata = event => {
    // quien dispara el evento
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  };
  // cuando de actualice el tiempo que hacemos
  handleTimeUpdate = event => {
    // console.log(this.video.currentTime)
    this.setState({
      // currentTime es propiedad de html con su API de media
      currentTime: this.video.currentTime
    });
  };
  handleProgressChange = event => {
    // event.target.value
    this.video.currentTime = event.target.value;
  };
  handleVolumeChange = event => {
    //volume elemento nativo del navegador de video
    this.video.volume = event.target.value;
    this.setState({
      onOff: this.video.volume
    });
  };
  // Quitar volume mute
  handleVolClick = event => {
    this.video.volume = !this.video.volume;
    this.setState({
      onOff: this.video.volume
    });
  };
  handleFullScreenClick = event => {
    // SALGO DE FULL screenen mozila
    if (document.mozFullScreen) {
      document.mozCancelFullScreen();
    }
    // mando a full screen
    else if (this.player.mozRequestFullScreen) {
      this.player.mozRequestFullScreen();
    }
    if (document.webkitIsFullScreen) {
      document.webkitExitFullscreen();
    }
    else if (this.player.webkitRequestFullscreen) {
      this.player.webkitRequestFullscreen();
    }
  };
  setRef = element => {
    this.player = element;
  };
  render() {
    return (
      // hacer referencia al elemento
      <VideoPlayerLayout setRef = {this.setRef}>
      <Title
        title={this.props.media.get('title')}
        />
      <Controls >
        <PlayPause
          // mostrar dependiendo del estado play/pause
          pause = {
            this.state.pause
          }
          // handleClick de play-pause (props.handleclick)
          //togglePlay sera una funcion
          handleClick = {
            this.togglePlay
          }
          />
        <Timer duration = {
            formattedTime(this.state.duration)
          }
          // pasamos el estado - luego a time.js
          currentTime = {
            formattedTime(this.state.currentTime)
          }
          />
        <ProgressBar duration = {
          this.state.duration
        }
        value = {
          this.state.currentTime
        }
        handleProgressChange = {
          this.handleProgressChange
        }
        />
        <Volume onOff = {
          this.state.onOff
        }
        handleVolClick = {
          this.handleVolClick
        }
        handleVolumeChange = {
          this.handleVolumeChange
        }
        />
        <FullScreen handleFullScreenClick = {
          this.handleFullScreenClick
        }
        />
      </Controls>
      <Spinner
      // validar estado loading si esta acyivo se pone
      active = {
        this.state.loading
      }
      />
      <Video
        autoplay = {this.props.autoplay }
      // this.state.pause pasando estado de play/pause
        pause = {this.state.pause}
        handleLoadedMetadata = {this.handleLoadedMetadata}
        handleTimeUpdate = {this.handleTimeUpdate}
        handleSeeking = { this.handleSeeking }
        handleSeeked = {this.handleSeeked}
        src={this.props.media.get('src')}
        // onClick={this.props.handleClick}
      />
      </VideoPlayerLayout>
    );
  }
}
function mapStateToProps(state, props){
  return {
    media: state.get('data').get('entities').get('media').get(props.id)
  }
}
// export default VideoPlayer;
export default connect(mapStateToProps)(VideoPlayer);