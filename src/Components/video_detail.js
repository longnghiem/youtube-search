import React from 'react';

const VideoDetail = ({ video }) => { //we only need the property'video' from props

  //Usually the parent elements and theirs child elements are loaded simutaneously
  //so 'video' usually ends up undefined. we need to give the browser time.
  if (!video){
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
