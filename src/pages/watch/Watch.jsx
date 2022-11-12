import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import video from "./video/THE-WARREN.mp4"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={video}
      />
    </div>
  );
}