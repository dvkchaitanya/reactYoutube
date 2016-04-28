///<reference path='../typings/main.d.ts' />
import * as React from 'react';
import * as ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import {
    Component
}
from 'react';

import * as YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBTzE5N58c5aI1fcDS6a0LWtQBEX9Nk-EU';



interface MyProps {

}
interface MyState {
    videos: YTSearch.IVideoResponse[];
    selectedVideo: YTSearch.IVideoResponse;

}
class App extends Component < any, any > {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
		this.videoSearch('surfboards');
    }

	videoSearch(term){
		YTSearch({
			key: API_KEY,
			term: term
		}, (videos: YTSearch.IVideoResponse[]) => {
			console.log(videos);

			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
    render() {
        return <div>
			<SearchBar onSearchTermChange = {(term)=>{this.videoSearch(term)}}/>
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList 
				videos={this.state.videos} 
				onVideoSelect= {(selectedVideoParam:YTSearch.IVideoResponse)=> { this.setState({
					selectedVideo: selectedVideoParam
					})}} />
		</div>;
    }

}


ReactDom.render(<App/>, document.querySelector('.container'));
