//=========ボタンが浮き上がるjs======================================================
//jquery-1.9.0.min.jsが必要
//jquery.hoverpulse.jsが必要

  $(document).ready(function(){
      $("#mainbox02 img").hoverpulse();
  });

  $(document).ready(function(){
      $("#bgimg img").hoverpulse();
  });

//===================================================================================
//=========ボタンの色が変わるjs======================================================
//jquery-1.9.0.min.jsが必要
//jquery-ui-1.9.2.jsが必要

$(document).ready(function(){
  $("#menu a").hover(function() {
    $(this).stop(true, false).animate({backgroundColor: "#F0E68C",
						color: "#000000"}, 400);
  },function() {
    $(this).stop(true, false).animate({backgroundColor: "#8B4513",
						color: "#FFFFFF"}, 400);
  });
});

$(document).ready(function(){
  $(".linkbox").hover(function() {
    $(this).stop(true, false).animate({backgroundColor: "#B0C4DE",
						color: "#000000"}, 400);
  },function() {
    $(this).stop(true, false).animate({ backgroundColor: "#FFFFFF",
						color: "#000000"}, 400);
  });
});
//===================================================================================
//=========タブの実装===============================================================
//jquery-1.9.0.jsが必要
//jquery-ui-1.10.0.custom.jsが必要
//jquery-ui-1.10.0.custom.cssが必要
	$(function() {
		$( "#tabs" ).tabs();
	});
//===================================================================================