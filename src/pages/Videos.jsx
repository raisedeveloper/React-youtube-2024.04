import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function NotFound() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery(); ({ /*세팅따로 할 필요없이 끝나면 알아서 꺼짐*/
    queryKey: ['videos', keyword], /* async함수 : then, else, finally 등 promise 함수 지원 역할 - 동작하는데는 있으나 없으나 상관없음 */
    queryFn: async () => {
      return axios
        .get(`/data/${keyword ? 'search' : 'popular'}.json`)
        .then(res => res.data.items);
    },
    staleTiem: 1000 * 60 * 1, // 옵션 staleTime 신선하지 않은, 탁한 / 1분 , ms 단위로 지정가능

  });
  // useEffect(() => {
  //   axios.get(`/data/${keyword ? 'search' : 'popular'}.json`)
  //     .then(res => {
  //       setVideos(res.data.items);
  //       console.log(videos);
  //     });
  // }, [keyword]);
  return (
    <>
      <div>Videos {keyword ? `${keyword}로 검색` : 'Hot Trend'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!!!</p>}
      {Videos && (
        <ul>
          {videos.map(video => {
            <li key={video.id}>{video.snippet.title}</li>
          })}
        </ul>
      )}
    </>
  )
}