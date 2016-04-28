///<reference path='../../typings/main.d.ts' />
import * as React from 'react';

import * as YTSearch from 'youtube-api-search';

import VideoListItem from './video_list_item';
const VideoList = (props) => {
	const videos:YTSearch.IVideoResponse[]= props.videos;
return (<div>
			<ul className="col-lg-4 list-group">
				{videos.map((video) => { return <VideoListItem onVideoSelect={props.onVideoSelect}
				key={video.etag} video={video} />; } ) }
			</ul>
		</div>);
};

export
default VideoList;
