
$(document).ready(function() {

//   alert("is " + window.screen.height);
//   alert("窗口可视区 "+$(window).height());
// alert("窗口文档 "+$(document).height());
// alert("文档body "+ $(document.body).height());
// alert("body总高度"+$(document.body).outerHeight(true));

    // $('.copyright').css({'top':window.screen.height});

  var v_id = getQueryStr('id');

  // Create an AJAX request to get a JSON file and render it as inside a table
  $.getJSON(PINGYUANIP+"/web_con/region", function(result) {
    // Loop throgh each object inside country array
    $.each(result.value, function(index, field) {
      var tr = $('<div/>');
      tr.append("<h3 lxxid='"+field.id+"' class='page-header'>"+field.name+"</h3>");
      $("#vf_div").append(tr);
      $.each(field.village , function(index , vchild) {
        var btnstr = $('<span/>');
        // btnstr.append("<button type=button class=btn-addr data-id="+vchild.id +">"+ vchild.name + "</button>")
        btnstr.append("<button type=button class=btn-addr data-id="+vchild.id +">"+ vchild.name + "</button>")
        $("#vf_div").append(btnstr.click(function(){
          window.location="./VAffairsChild.html?id="+vchild.id+"&town="+field.name+"&village="+vchild.name;
        }));

    });
    if(field.id==v_id){

      var offset = $("h3[lxxid="+v_id+"]").offset().top - 50;
      $('html,body').animate({scrollTop : offset}, 1000);
      $("h3[lxxid="+v_id+"]").css({'color' : '#CF021B'});
    }
    // if(field.id==v_id){
    //   tr.attr('id',"pos");

    //   $("html,body").stop(true);
    //   $("html,body").animate({scrollTop: tr.offset().top}, 1000);
    //   var color ='255,0,0';
    //   var duration = 100;
    //   tr.animate( { color: 'rgb(' + color + ')' }, duration / 2 );
    //   tr.animate( { color: current }, duration / 2 );
    //   // tr.fadeOut(100).fadeIn(100);
    // }
  });

});

        // mScroll("pos");
});
