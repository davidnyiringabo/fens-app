import React from "react"
// import ReactPlayer from "react-player";
import video1 from './../../assets/videos/Ashes.mp4'
import video2 from './../../assets/videos/legend.mp4'
import video3 from './../../assets/videos/Soul.mp4'
import video4 from './../../assets/videos/Best.mp4'

const PlayerV = () => {
  return (
    <div className="App1">
      <form>
        <div className="select">
          <label>Search:</label>
          <select name="images">
            <option>recent</option>
            <option>video1</option>
            <option>video2</option>
            <option>video3</option>
            <option>video4</option>
          </select>
        </div>
        <div className="showed1">
          <label>Show:</label>
          <select name="images">
            <option>4</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>Videos
        </div>
      </form>
      <div className="videos">
        <div className="video--item">
          <video src={video1} controls />
          <p>place: Play ground <br />taken:22/02/2023 16:00 PM</p>
        </div>
        <div className="video--item">
          <video src={video2} controls />
          <p>place: Domitory<br />taken:22/02/2023 16:00 PM</p>
        </div>
        <div className="video--item">
          <video src={video3} controls />
          <p>place: Domitory <br />taken:22/02/2023 16:00 PM</p>
        </div>
        <div className="video--item">
          <video src={video4} controls />
          <p>place: Class A <br />taken:22/02/2023 17:00 PM</p>
        </div>
      </div>
      <a href="#" className="a1">load more...</a>
    </div>
  );
}

export default PlayerV;