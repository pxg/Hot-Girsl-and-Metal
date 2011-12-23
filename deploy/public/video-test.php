<html>
	<head>
		<title>Hot Girls and Metal!</title>
		<script type="text/javascript" src="/_assets/js/lib/jquery-1.7.1.min.js"></script>
		
		<script type="text/javascript">
			//alert('blah');
			
			// Youtube code for the 2 players ////////////////////////////////////////////////////////////////
			var tag = document.createElement('script');
			tag.src = "http://www.youtube.com/player_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


			var player;

			function onYouTubePlayerAPIReady() {
				player = new YT.Player('player', {
					height: '880',
					width: '1280',
					videoId: '<?php echo $_GET['video_id']; ?>',
					playerVars: {
						controls: '0'
					},
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange,
						'onError': onError
					}
				});
			}

			function onPlayerReady(event) {
				event.target.setVolume(0);
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

		</script>
		
		<link rel="stylesheet" href="/_assets/css/site.css">
	</head>
	
	<body>
		<div id="player"></div>
	</body>
	
</html>