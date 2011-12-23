
// Youtube code for the 2 players ////////////////////////////////////////////////////////////////
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
var player2;

function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		height: '880',
		width: '1280',
		videoId: 'DUT5rEU6pqM',
		playerVars: {
			controls: '0'
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange,
			'onError': onError
		}
	});

	// should  the sizes be 0 here?
	player2 = new YT.Player('player2', {
		height: '390',
		width: '640',
		videoId: 'Myj-q0OpETk',
		playerVars: {
			controls: '0'
		},
		events: {
			'onReady': onPlayerReady2,
			'onStateChange': onPlayerStateChange,
			'onError': onError
		}
	});
}

function onPlayerReady(event) {
	event.target.setVolume(0);
	event.target.playVideo();
}

function onPlayerReady2(event) {
	event.target.setVolume(100);
	event.target.playVideo();
}

function onError(event) {
	alert('on error');
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		//setTimeout(stopVideo, 6000);
		done = true;
	}
}

function stopVideo() {
	player.stopVideo();
}

// Move to next track when button is pressed //////////////////////////////////////////////////////////////////////
var videos =new Array();
videos[0] = 'UCK0L6vqn8U'; // jessica simpson
videos[1] = '7rz31VhUEoA';
videos[2] = 'TKfl94x3ptg';
videos[3] = 'VCLxJd1d84s';
videos[4] = 'MakgTQ_Ubzs';

var songs =new Array();
songs[0] = 'F_6IjeprfEs'; //roots
songs[1] = '7RJsRQOneMY'; //replica
songs[2] = '_mWPPBW4DU8'; // davidian
songs[3] = '9d4ui9q7eDM'; // holly wars
songs[4] = 'AJ0sW7KOFhU'; // warriors of the world unite

// TODO move to next track at the end of song/video too
//$(window).load(function(){
$(document).ready(function() {
	// detect next button click
	$("#next").click(function() {
		var nextVideo = videos[(Math.random() * videos.length) | 0];
		var nextSong = songs[(Math.random() * songs.length) | 0];
		//TODO: get array from xml?
		//TODO: toggle on randomisation and coupling
		//alert(nextVideo + ' ' + nextSong);
		player.loadVideoById(nextVideo);
		player2.loadVideoById(nextSong);
	});
});