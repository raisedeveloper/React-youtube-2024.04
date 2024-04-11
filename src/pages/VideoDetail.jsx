import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function VideoDetail() {

  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://youtube.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then((response) => {
        setVideo(response.data.items[0]);
      })
      .catch((error) => {
        console.error("Error fetching video details:", error);
      });
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>;
  }

  const { snippet } = video;
  return (
    <div>
      <h2>{snippet.title}</h2>
      <p>{snippet.description}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/watch?=${videoId}`}
        title={snippet.title}
        allowFullScreen
      ></iframe>
    </div>
  );
}