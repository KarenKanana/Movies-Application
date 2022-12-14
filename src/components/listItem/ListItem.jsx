import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { useState } from "react";

export default function ListItem({ index, img }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  const [liked, setLiked] = useState(false)
  const [disliked, setDislike] = useState(false)

  const handleLike = () => setLiked(!liked)
  const handleDislike = () => setDislike(!disliked)


  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={img}
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <div onClick={handleLike} >
              {liked ? <ThumbUpIcon className="icon" style={{ color: "green" }}  /> : <ThumbUpAltOutlined className="icon" /> }
              </div>
              
              <div onClick={handleDislike} >
                {disliked ? <ThumbDownAltIcon className="icon" color="secondary"  /> : <ThumbDownOutlined className="icon" /> }
              </div>

            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
            The story follows the people that visited the club, and is peppered with the Jazz music that made it so famous.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}