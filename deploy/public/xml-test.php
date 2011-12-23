<html>
	<head>
		<title>Hot Girls and Metal!</title>
		<script type="text/javascript" src="/_assets/js/lib/jquery-1.7.1.min.js"></script>
		
		<script type="text/javascript">
			//TODO move to seperate file
			// based on http://www.switchonthecode.com/tutorials/xml-parsing-with-jquery
			// read xml file into array(s)
			$(document).ready(function()
			{
				$.ajax({
					type: "GET",
					url: "/_assets/xml/videos.xml",
					dataType: "xml",
					success: parseXml
				});
			});
			
			function parseXml(xml)
			{
				//find every Tutorial and print the author
				$(xml).find("item").each(function()
				{
					alert($(this).find("video").attr("youtube_id"));
					//$("#output").append($(this).attr("author") + "<br />");
					// add to arrays
				});
			}
			// randomly select a pair from the array
			// alert or print to page
		</script>
		
		<link rel="stylesheet" href="/_assets/css/site.css">
	</head>
	
	<body>
		<h1>xml test</h1>
		<div id="player"></div>
	</body>
	
</html>