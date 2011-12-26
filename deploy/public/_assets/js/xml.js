// based on http://www.switchonthecode.com/tutorials/xml-parsing-with-jquery
// read xml file into array(s)
var videos = new Array();
var songs = new Array();

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
		//alert($(this).find("video").attr("youtube_id"));
		videos.push($(this).find("video").attr("youtube_id"));
		songs.push($(this).find("song").attr("youtube_id"));
	});
	//alert(videos);
	//alert(songs);
}