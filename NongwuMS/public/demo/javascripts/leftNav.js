$(function(){

	function goSearchUrl(){
		var key = $('#leftNavSearchBar').val();
		var tag = $('#leftNavSearchTag').val();
		var url = "./VSearch.html?key="+key+"&tag="+tag;
		window.location.href= url;
	}

	var top = $('.leftNav .active').position().top;
	var center = 22.5 + top;
	// alert(center);
	$('.indecate').css({'top': center - $('.indecate').height() / 2});

	$('#leftNavSearchBar').bind('keypress', function(e){
		if(e.keyCode == 13){
			goSearchUrl();
		}
	});

	$('#leftNavLeftSearchBtn').click(function(){
		goSearchUrl();
	});

});
