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

$(document).ready(function() {
	var videos = new Array();
	var songs = new Array();
	
	$.ajax({
		type: "GET",
		url: "/_assets/xml/videos.xml",
		dataType: "xml",
		success: parseXml
	});
	
	function parseXml(xml)
	{
		//find every Tutorial and print the author
		$(xml).find("item").each(function()
		{
			//alert($(this).find("video").attr("youtube_id"));
			videos.push($(this).find("video").attr("youtube_id"));
			songs.push($(this).find("song").attr("youtube_id"));
		});
		//alert(videos);
		//alert(songs);
	}

/*
// Move to next track when button is pressed //////////////////////////////////////////////////////////////////////
var videos =new Array();
videos[0] = 'UCK0L6vqn8U'; // jessica simpson
videos[1] = 'TKfl94x3ptg';
videos[2] = 'VCLxJd1d84s'; // TODO need to skip intro (put in xml)
videos[3] = 'MakgTQ_Ubzs';

var songs =new Array();
//songs[0] = 'F_6IjeprfEs'; //roots
songs[0] = '7RJsRQOneMY'; //replica
songs[1] = '_mWPPBW4DU8'; // davidian
songs[2] = '9d4ui9q7eDM'; // holly wars
songs[3] = 'AJ0sW7KOFhU'; // warriors of the world unite
*/

// TODO move to next track at the end of song/video too
//$(window).load(function(){
//$(document).ready(function() {
	// detect next button click
	$("#next").click(function() {
		var id = (Math.random() * videos.length) | 0;
		var nextVideo = videos[id];
		var nextSong = songs[id];
		//TODO: get array from xml?
		//TODO: toggle on randomisation and coupling
		player.loadVideoById(nextVideo);
		player2.loadVideoById(nextSong);
	});
});