/**$(document).ready(function(){
	
	
);**/

function makeSelect(tmp){
			var subsvillage=tmp.parent().parent().next('div').find('span.village');
		 	console.log(subsvillage);
		 	$('#village_newmodify select').html('');
		 	
		 	for(var i=0;i<subsvillage.length;i++){
		 		// alert($(subsvillage[i]).attr('lxxid'));
		 		$('#village_newmodify select').append("<option  value="+$(subsvillage[i]).attr('lxxid')+
		 			" superID="+$(subsvillage[i]).attr('super')+">"+
		 			$(subsvillage[i]).text()+"</option>");
		 	}


}

$(document).ready(function(){


	var townid;
	// var superID;
	$('#town_newmodify input[type="radio"]').click(function(){
		 var title=$(this).val();
		 if (title=="add_town") {
		 	$('#town_newmodify .modal-title').text("添加乡镇");
		 	$('#town_newmodify #town1').css('display','');
		 	$('#town_newmodify #town2').css('display','none');
		 	$('#town_newmodify #town3').css('display','none');
		 }else if (title=="modify_town") {
		 	$('#town_newmodify .modal-title').text("修改乡镇");
		 	$('#town_newmodify #town1').css('display','none');
		 	$('#town_newmodify #town2').css('display','');
		 	$('#town_newmodify #town3').css('display','');
		 }
	});


	$('#village_newmodify input[type="radio"]').click(function(){
		 var title=$(this).val();
		 if (title=="add_village") {
		 	$('#village_newmodify .modal-title').text("添加村庄");
		 	$('#village_newmodify #village1').css('display','');
		 	$('#village_newmodify #village2').css('display','none');
		 	$('#village_newmodify #village3').css('display','none');
		 }else if (title=="modify_village") {
		 	$('#village_newmodify .modal-title').text("修改村庄");
		 	$('#village_newmodify #village1').css('display','none');
		 	$('#village_newmodify #village2').css('display','');
		 	$('#village_newmodify #village3').css('display','');

		 	
		 }
	});
	
	// $('.btn-cou').click(function(){	
	// 	$('#myModalLabel').html('添加村庄');
	// 	$("#labelcountry").html("村庄名");			
	// })
	// $('.btnxz').click(function(){	
	// 	$('#myModalLabel').html('添加乡镇');
	// 	$("#labelcountry").html("乡镇名");
	// })

	$('.addvillage').click(function(){
		// window.location.href="/admin_region/add?name="+$('#inputEmail3').val()+
		// 					 "&super="+$(this).attr('super');
		$('#village_newmodify input[type="radio"]').first().attr('checked', 'checked');
		townid = $(this).attr('super');
		makeSelect($(this));
		// alert($('#inputEmail3').val()+"&super="+$(this).attr('super'));
	});

	$('#addtown').click(function(){	
		// if($("#labelcountry").html() == "乡镇名"){
		// 	window.location.href="/admin_region/add?name="+$('#inputEmail3').val();
		// } else {
			// window.location.href="/admin_region/add?name="+$('#inputEmail3').val()+
			// 				 "&super="+townid;
		// }
		var tmp = $('#town_newmodify input[type="radio"]:checked');
		// alert($(tmp).val());
		if ($(tmp).val()=="add_town") {
			window.location.href="/admin_region/add?name="+$('#inputtown').val()+"&super=0";
			

		}else{
				$('#formtown').submit();
				// alert('submit');
			

		}
		
	});

	$('#addvillage').click(function(){
		
		var tmp = $('#village_newmodify input[type="radio"]:checked');

		if ($(tmp).val()=="add_village") {
			window.location.href="/admin_region/add?name="+$('#inputvillage').val()+
							 "&super="+townid;
			// alert($('#inputvillage').val());
			
		}else{


			var tmpid=$('#villageselect option:selected').attr('superid');
			
			$('#villagehidden').val(tmpid);
			
			$('#formvillage').submit();
				

		}

	});



	$('#deltown').click(function(){
		var value = $('select[name="regionid"]').val();
		window.location.href = "/admin_region/delete?id=" + value;
	});
	
});
		


