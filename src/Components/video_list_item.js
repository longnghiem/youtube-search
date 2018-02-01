import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //The VideoListItem has 2 property named video and onVideoSelect,
  //so please create new variables (which are also named 'video' and onVideoSelect) from thoese property
  //const video = props.video;
  //const onVideoSelect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={()=>onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className='media-heading'>
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
