var url = PINGYUANIP + "/mobile_search";
var historyUrl = url+"/history";
function getLocalTime(nS) {
   return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');
}

function getArg(){
  var uri =	decodeURI(window.location.href);
  var aQuery = uri.split("?");  //取得Get参数
  var aGET = new Array();
  if(aQuery.length > 1)
  {
    var aBuf = aQuery[1].split("&");
    for(var i=0, iLoop = aBuf.length; i<iLoop; i++)
    {
      var aTmp = aBuf[i].split("=");  //分离key与Value
      aGET[aTmp[0]] = aTmp[1];
    }
  }
  return aGET;
}

$(function(){

	function startSearch(){
		var text = $('.slider .active').text();
		var tag = text == "标题" ? 0 : 1;

		var key = $('#searchBar').val();
		var finalUrl = url + "?key="+key+"&tag="+tag;

    $.getJSON(finalUrl, function(result) {

			//动画
			$('.keywords').slideUp('fast');

			$('.insertBody').html("");
			var value = result["value"];
			var index = 1;
			for(var obj in value){
				var type = value[obj]['type'];
				var htmlString = "";
				if(type == 1 || type == 2){
					htmlString = '<tr><td>'+index+'</td><td>'+value[obj]["title"]+'</td><td>'+getLocalTime(value[obj]['uploadtime'])+'</td><td><a target="_blank" href="./VArticleDetail.html?type='+type+'&id='+value[obj]['id']+'">查看</a></td></tr>';
				}else{
					htmlString = '<tr><td>'+index+'</td><td>'+value[obj]["title"]+'</td><td>'+getLocalTime(value[obj]['uploadtime'])+'</td><td><a target="_blank" href="./VArticleDetail.html?id='+value[obj]['id']+'">查看</a></td></tr>';
				}
				$('.insertBody').append(htmlString);
				index++;
			}
			$('.result').show();
			if(value.length == 0){

				$('.result table').hide();
			}else{
        $('.result table').show();
      }

		});


	}


	$('#searchBar').bind('keypress', function(e){
		if(e.keyCode == 13){
			startSearch();
		}
	});
	$('#searchBtn').click(function(){
		startSearch();
	});

	/** 进入页面*/
	var GET = getArg();
	var key = GET['key'];
	var tag = GET['tag'];
	$('.slider span').removeClass("active");
	if(tag == 0 || (typeof(tag) == "undefined")){
		$('.slider span:first').addClass('active');
	}else{
		$('.slider span:last').addClass('active');
	}
	if(key && key.length){
		$('#searchBar').val(key);
		startSearch();
	}

	//获取搜索关键字排行
	// $.getJSON(historyUrl, function(result){
  //
	// 	$('.keywords').html('');
	// 	var htmlString = "";
	// 	var value = result['value'];
	// 	for(var index in value){
	// 		htmlString = "<button class='btn btn-addr'>"+value[index]['content']+"</button>";
	// 		$('.keywords').append(htmlString);
	// 	}
  //
	// });

	$('.keywords').on('click', 'button', function(){
		var text = $(this).text();
		$('#searchBar').val(text);
		startSearch();
	});



/** 上方搜索选项*/
  function gotoActive(animate){
    var left = $('.slider .active').position().left;
    if(animate){
      $('.searchIndecate').animate({"left":left+5});
    }else{
      $('.searchIndecate').css({"left":left+5});
    }

  }

  gotoActive(0);
  $('.slider span').click(function(){
    $('.slider span').removeClass('active');
    $(this).addClass('active');
    gotoActive(1);

    var text = $('.slider .active').text();
    if(text.length){
    	startSearch();
    }
  });

});
