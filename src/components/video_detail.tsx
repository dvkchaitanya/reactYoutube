
///<reference path='../../typings/main.d.ts' />
import * as React from 'react';
import * as YTSearch from 'youtube-api-search';
const VideoDetail = (props)=>{
	const video: YTSearch.IVideoResponse = props.video;
	if(!video){
		return <div>Loading ..</div>
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	
return (<div className="video-detail col-lg-8">
    <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
    </div>
    <div>
        <div>{video.snippet.description}</div>
        <div>{ video.snippet.title }</div>
    </div>
</div>);
}
export default VideoDetail;
