function parseTime(time){
  var date = new Date(parseInt(time));
  var year= date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  return year+"/"+month+"/"+day;
}


$(document).ready(function() {


  // Create an AJAX request to get a JSON file and render it as inside a table
  $.getJSON(PINGYUANIP+"/web_gov/index", function(result) {
    var tr;
    // Loop throgh JSON file to determine top-level objects (country array in our case)
    $.each(result, function(key, data) {
      // Loop throgh each object inside country array
      switch(key)
      {
        case "pagination":
        $.each(data, function(index, field) {
          // Build a table row and append to the only existing table
          tr = $('<div/>');
          if(index==0){
            tr.attr('class', "item active");
          }else{
            tr.attr('class', "item");
          }
          tr.append('<img src='+ PINGYUANIP+field.image + '>');
          tr.append('<div class=carousel-caption><p>'+field.title+'</p></div>')
          // tr.append("<td>" + new Date(parseInt(field.uploadtime)).toLocaleString().substring(0,8) + "</td>");
          $("#item_img_group").append(tr.click(function(){
            window.open("./VArticleDetail.html?id="+field.id+"&type=1");
          }));
        });
        break;

        case "policy":
        $.each(data, function(index, field) {
          // Build a table row and append to the only existing table
          tr = $('<tr/>');
          tr.append("<td >" + field.title + "</td>");
          tr.append("<td class=thead_right>" + parseTime(field.uploadtime)+ "</td>");
          $("#table01").append(tr.click(function(){
            window.open("./VArticleDetail.html?id="+field.id+"&type=1");
          }));
        });
        break;

        case "project":
        $.each(data, function(index, field) {
          tr = $('<tr/>');
          tr.append("<td>" + field.title + "</td>");
          tr.append("<td class=thead_right>" +  parseTime(field.uploadtime) + "</td>");
          $("#table10").append(tr.click(function(){
            window.open("./VArticleDetail.html?id="+field.id+"&type=2");
          }));
        });
      break;

      case "event":
      $.each(data, function(index, field) {
        console.log("field is :"+field.name);
        var div = $('<div />');
        if (parseInt(index)%2 == 0){
          div.attr("class","col-xs-5  col-frame");
        }else {
          div.attr("class","col-xs-5  col-frame col-xs-offset-1");
        }

        tr = $('<table />');
        tr.attr ("class" ,"table table-hover mainPtable");
        tr.attr ("id" ,"table_v"+index);
        tr.append("<thead><tr><th width=75%>" +field.name+ "村务公开<th width=25% class=thead_right>"+
        "<a href='"+"./VAffairs.html?id="+field.id+ "' target=_blank"+">更多>></a></th></tr></thead>");
        tr.append("<tbody></tbody>");

        div.append("<div class=table_headshadow></div>")
        div.append(tr);

        $('#addtable').append(div);

        $.each(field.article, function(i, context) {
          tr = $('<tr/>');
          // tr.attr('data-tag', 1);
          tr.append("<td >" + context.title + "</td>");
          tr.append("<td class=thead_right>" + parseTime(context.uploadtime) + "</td>");
          $("#table_v"+index).append(tr.click(function(){
            window.open("./VArticleDetail.html?id="+context.id);}));
          });
    });
    break;
    default:
    break;
  }

});

});
});
