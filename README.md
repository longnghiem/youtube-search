# Youtube-search project Summary
The objective of this project is to build a simple "Youtube search" application.

On loaded, the application automatically returned an array with 5 Youtube videos, while having the search term 'cat and dog' as default. The first video item of the returned array is set to be the 'active' video and can be played as playing a normal Youtube video. On the other hand, the returned 5 videos are listed vertically with thumbnails and titles.

Users can click on 1 of the 5 listed videos to make it become the active video.
And users can input new search terms to find other videos on Youtube. There is no 'submit' button for the search bar, instead, the search term is automatically submitted every 300 milliseconds.

The application is published by [surge](https://surge.sh/). 

# Getting started
Click [here](http://lnyoutube.surge.sh/) to try the application.
Or clone the project:

```
> git clone https://github.com/longnghiem/youtube-search.git
> cd youtube-search
> npm install
> npm start
```
#  Acknowledgments
This project was initialized by Mr. Stephen Grider as teaching materials for course
"Modern React with Redux" on Udemy.com.
More details can be found [here](https://github.com/StephenGrider/ReduxSimpleStarter)
