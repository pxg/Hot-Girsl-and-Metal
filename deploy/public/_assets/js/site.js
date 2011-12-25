// Youtube code for the 2 players ////////////////////////////////////////////////////////////////
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var player2;

function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		height: '100%',
		width: '100%',
		videoId: 'DUT5rEU6pqM',
		playerVars: {
			controls: '0',
			wmode: "opaque"
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange,
			'onError': onError
		}
	});

	player2 = new YT.Player('player2', {
		height: '1', // NOTE: wont work as zero
		width: '1',
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

function onPlayerStateChange(event) {
	//TODO: add in switch statment instead 
	// unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5).
	if(event.data === 0) {
		$('#next').click();
	}
	
	// pause should always be for player1 (video player)
	if(event.data === 2){
		player2.pauseVideo();
	}
	
	if(event.data === 1){
		player2.playVideo();
	}
}

function stopVideo() {
	player.stopVideo();
}

$(document).ready(function() {
	$("#home").fitVids();
	//$(".container").fitVids();
	
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
		$(xml).find("item").each(function()
		{
			videos.push($(this).find("video").attr("youtube_id"));
			songs.push($(this).find("song").attr("youtube_id"));
		});
	}
	
	$("#next").click(function() {
		var id = (Math.random() * videos.length) | 0;
		var nextVideo = videos[id];
		var nextSong = songs[id];
		player.loadVideoById(nextVideo);
		player2.loadVideoById(nextSong);
	});
});