function getPar(par){
  //获取当前URL
  var local_url = document.location.href;
  //获取要取得的get参数位置
  var get = local_url.indexOf(par +"=");
  if(get == -1){
    return false;
  }
  //截取字符串
  var get_par = local_url.slice(par.length + get + 1);
  //判断截取后的字符串是否还有其他get参数
  var nextPar = get_par.indexOf("&");
  if(nextPar != -1){
    get_par = get_par.slice(0, nextPar);
  }
  return get_par;
}

function parseTime(time){
  var date = new Date(parseInt(time));
  var year= date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  return year+" / "+month+" / "+day;
}


$(document).ready(function() {
  var url;
  var bdTextstring;

  if (getPar("type")) {
    url = "/web_gov/detail?type="+getPar("type")+"&id="+getPar("id");
  }else{
    url = "/web_con/detail?id="+getPar("id");
  }

  $.getJSON(PINGYUANIP + url, function(result){

    // alert(" ? is "+screen.width);
    if(screen.width < 768){
      $('#contentid').attr('class','table-responsive');
    }
    $('#contentid').html(jQuery.parseHTML(result.content));
    $('.titleid').append(result.title);

    bdTextstring =result.title+"-来自："+document.location.href;

    var up_time =$('<p />');
    up_time.append(parseTime(result.uploadtime));
    $('#article_time').append(up_time);
    var filterContent = result.content.replace(/&quot;/g, '\"').replace(/&apos;/g, "\'");
    $('#contentid').html(filterContent);


    console.log(filterContent);
    console.log("image is  = " +result.image);
    var image_var = result.image;
    if (!image_var || image_var.length == 0){
      console.log("无图");
    }
    else{
      var title_img =$('<img />')
      $('#imgContainer').append('<img class=img-rounded src='+PINGYUANIP+result.image+'>');
    }


    if(screen.width > 768){

    window._bd_share_config={
      "common":{
        "bdSnsKey":{},
        "bdText":bdTextstring,
        "bdMini":"1",
        "bdMiniList":["tsina","weixin","qzone","tqq","tieba","copy","print"],
        "bdPic":"","bdStyle":"0","bdSize":"16"},
      "slide":{"type":"slide","bdImg":"3","bdPos":"right","bdTop":"180"}};
      with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

    }


  });
});
