//=========�{�^���������オ��js======================================================
//jquery-1.9.0.min.js���K�v
//jquery.hoverpulse.js���K�v

  $(document).ready(function(){
      $("#mainbox02 img").hoverpulse();
  });

  $(document).ready(function(){
      $("#bgimg img").hoverpulse();
  });

//===================================================================================
//=========�{�^���̐F���ς��js======================================================
//jquery-1.9.0.min.js���K�v
//jquery-ui-1.9.2.js���K�v

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
//=========�^�u�̎���===============================================================
//jquery-1.9.0.js���K�v
//jquery-ui-1.10.0.custom.js���K�v
//jquery-ui-1.10.0.custom.css���K�v
	$(function() {
		$( "#tabs" ).tabs();
	});
//===================================================================================