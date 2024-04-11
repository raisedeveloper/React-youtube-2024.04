import React from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import VideoCard from '../components/VideoCard';


export default function Videos() {
  const { keyword } = useParams();
  const keywordUri = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=25&part=snippet&q=${keyword}`;
  const popularUri = `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=25&part=snippet`;
  const { isLoading, error, data: videos } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      const uri = keyword ? keywordUri + keyword : popularUri;
      return axios
        // .get(`/data/${keyword ? 'search' : 'popular'}.json`)
        .get(uri)
        .then(res => res.data.items);
    }, staleTime: 1000 * 60 * 1,
  });
  // useEffect(() => {
  //   axios.get(`/data/${keyword ? 'search' : 'popular'}.json`)
  //     .then(res => setVideos(res.data.items))
  // }, [keyword])
  return (
    <div>
      <div style={{ marginBottom: '10px', color: "lightcoral", padding: '0px 0px 15px 25px'}}>Videos {keyword ? `${keyword} 검색` : 'Hot Trend'}</div>
      {isLoading && <p><HourglassTopIcon />Loading</p>}
      {error && <p><WarningAmberIcon />Something is wrong!!!</p>}
      {videos && (
        <div style={{textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1px', margin: '5px'}}>
          {videos.map(video => (
            <div key={video.id} style={{ flex: '1 0 21%', marginBottom: '1px', textAlign: 'left'}}>
              <VideoCard video={video} />
              <div>{video.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}