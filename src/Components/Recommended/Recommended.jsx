import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { valueConverter } from '../../data';
import { Link } from 'react-router-dom';
import addKeyToUrl from '../../utils/add_key_to_url';

const Recommended = ({categoryId}) => {

   const [apiData,setApiData] = useState([]);

   const fetchData = async () =>{
      const relatedVideo_url = addKeyToUrl(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}`);
      await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
   }

   useEffect(()=>{
     fetchData();
   },[])

  return (
    <div className='recommended'>
      {apiData.map((item,index)=>{
         return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
             <h4>{item.snippet.title}</h4>
             <p>{item.snippet.channelTitle}</p>
             <p>{valueConverter(item.statistics.viewCount)} Views</p>
            </div>
         </Link>
         )
      })}
      </div>
  )
}

export default Recommended;
