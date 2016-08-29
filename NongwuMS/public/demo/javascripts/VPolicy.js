$(function(){

  function parseTime(time){
    var date = new Date(parseInt(time));
    var year= date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    return year+"/"+month+"/"+day;
  }
  function loaddata(page){

    var url = PINGYUANIP + "/web_gov/policy?page="+page;

    $.getJSON(url , function(result){
      $('#policy_tbody').html('');
      $.each(result.policies,function(i,item){
        $('#policy_tbody').append("<tr><td>"+(i+1)+"</td><td>"+
        item.title+"</td><td>"+parseTime(item.uploadtime)+"</td><td><a href='"+"./VArticleDetail.html?type="+1+"&id="+item.id+ "' target=_blank"+">查看</a></td></tr>")
      });

      $('.lxxpagination').html('');

      $('#ulpage').append("<li ><a class='leftPage'  aria-label='Previous' ><span aria-hidden='true' id='previous'>&laquo;</span></a></li>");

      pagesNum=result.pagesNum;
      currentPage=result.currentPage;
      var beginpage;
      var endpage;
      if(pagesNum<=10){
        beginpage=1;
        endpage=pagesNum;}
        else{
          beginpage=currentPage-4;
          endpage=currentPage - (-5);


          if(beginpage<1 ){
            beginpage=1;
            endpage=beginpage+9;
          }

          if(endpage>pagesNum)
          endpage=pagesNum;
          beginpage=endpage-9;
        }




        for(var i=beginpage;i<=endpage;i++){

          if (i==result.currentPage) {
            $('#ulpage').append("<li class='active'><a>"+i+"</a></li>");
            continue;
          }

          $('#ulpage').append("<li ><a>"+i+"</a></li>");
        }
        $('#ulpage').append("<li ><a class='rightPage' aria-label='Next' ><span aria-hidden='true'   id='nextpage'>&raquo;</span></a></li>");
        $('#ulpage').append("<li ><a class='totalnumber'>共"+result.pagesNum+"页</a></li>");
      });


    }

    loaddata(1);
    $('.lxxpagination').on('click', 'a', function(){
      var page = $(this).text();
      if ($(this).hasClass("totalnumber")) {
        return;
      }
      if($(this).hasClass("rightPage")){
        page = $('.lxxpagination li.active a').text();
        page++;
      }else if($(this).hasClass("leftPage")){
        page = $('.lxxpagination li.active a').text();
        page--;
      }
      loaddata(page);
    });


  });

$(document).ready(function(){

});
