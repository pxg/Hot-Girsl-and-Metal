
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

	player2 = new YT.Player('player2', {
		height: '390',
		width: '640',
		videoId: 'p5vNZ1YYBWU',
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
// TODO move to next track at the end of song/video too
//$(window).load(function(){
$(document).ready(function() {
	// detect next button click
	$("#next").click(function() {
		//TODO: choose from array
		//TODO: get array from xml?
		player.loadVideoById('UCK0L6vqn8U');
		player2.loadVideoById('Myj-q0OpETk');
		//alert("Hello world!");
		
	});
});

// 3. switch video and song on button click
// AkFqg5wAuFk // walk pantera
// UCK0L6vqn8U // jesica simpson