import axios from "axios";
import React, { useState, useEffect } from "react";
import "./RecVid.css";

function RecVids(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.video}&type=video&key=AIzaSyB8wMttZxBfr5FkkxdmXA9LFFVerMSiN3Q.&part=snippet`
      )
      .then((res) => {
        console.log(res.data);
      });
  });

  return (
    <div className="rec">
      <h2>Recommended Videos</h2>
    </div>
  );
}

export default RecVids;
