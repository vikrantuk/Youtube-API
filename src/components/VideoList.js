import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    const RenderedList = videos.map((video) =>{
        return <VideoItem key={video.id.videoId} video={video}/>
    })

return (
    <div className="ui relaxed divided list">
        {RenderedList}
    </div>
    );
};

export default VideoList;