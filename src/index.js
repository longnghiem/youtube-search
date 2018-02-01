import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAJ52ffae8YqUczIYLo3Z22Lm5bUKKqsoQ';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo:  null
    };

    this.videoSearch('cat and dog');
  }

  videoSearch(term){
    YoutubeSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
       <div>
         <SearchBar onSearchTermChange={videoSearch}/>
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList
           onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
           videos={this.state.videos} />
       </div>
       //=> we have given 'VideoList' 2 property: onVideoSelect and videos
       //so inside component VideoList, we can always call them out by props.onVideoSelect
       //and props.onVideoSelect
     );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

//Note: whenever thinking about creating a new component, ask yourself:
//does it need to keep track of "states"
//if yes, then it must be created as a class component, which
//has "constructor" and "render". And in a class component, we always need
//to use "this"
