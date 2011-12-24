<html>
<head>
	<script type="text/javascript" src="jquery-1.3.2.min.js"></script>
	<script type='text/javascript' src='jQuery.tubeplayer.js'></script>
	<script type='text/javascript'>
		alert('blah')
		jQuery("#youtube-player-container").tubeplayer({
			width: 600, // the width of the player
			height: 450, // the height of the player
			allowFullScreen: "true", // true by default, allow user to go full screen
			initialVideo: "DkoeNLuMbcI", // the video that is loaded into the player
			preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
			onPlay: function(id){}, // after the play method is called
			onPause: function(){}, // after the pause method is called
			onStop: function(){}, // after the player is stopped
			onSeek: function(time){}, // after the video has been seeked to a defined point
			onMute: function(){}, // after the player is muted
			onUnMute: function(){} // after the player is unmuted
		});
		jQuery("#youtube-player-container").tubeplayer("play")
	</script>
</head>	
<body>
	<div id='youtube-player-container'> </div>
	
	<a href="#" onClick='jQuery("#youtube-player-container").tubeplayer("play")'> 
		Play video in player
	</a>
	<a href="#" onClick='jQuery("#youtube-player-container").tubeplayer("pause")'> 
		Pause player 
	</a>
	<a href="#" onClick='jQuery("#youtube-player-container").tubeplayer("stop")'> 
		Stop player 
	</a>
	<a href="#" onClick='jQuery("#youtube-player-container").tubeplayer("mute")'> 	
		Mute player 
	</a>
	<a href="#" onClick='jQuery("#youtube-player-container").tubeplayer("unmute")'> 
		Unmute player
	</a>
	
</body>
</html>