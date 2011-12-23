  var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //	after the API code downloads.

var player;
var player2;
function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		height: '880',
		width: '1280',
		videoId: 'DUT5rEU6pqM', //'wjLgekyOZA0', /*'DdKWBUH0a4Y', /*'DUT5rEU6pqM', 'KcmDE-Qtmmw',
		playerVars: {
			controls: '0'
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange,
			'onError': onError
		}
	});
	//player.setPlaybackQuality('hd1080');
	
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
	//player2.playVideo();
}


// 4. The API will call this function when the video player is ready.
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



  // 5. The API calls this function when the player's state changes.
  //	The function indicates that when playing a video (state=1),
  //	the player should play for six seconds and then stop.
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