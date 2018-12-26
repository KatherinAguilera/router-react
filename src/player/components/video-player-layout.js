import React from "react";
import "./video-player-layout.css";
const VideoPlayerLayout = props => (
  <div className="VideoPlayer"
    // hacer referencia para que aparezca todos los elemento en el fullscreen
    ref={props.setRef}
  >
    {props.children}
  </div>
);
export default VideoPlayerLayout;
