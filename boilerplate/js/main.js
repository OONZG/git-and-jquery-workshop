// console.log("main.js is loaded");


// jQuery only run the file when the html code is ready
$(document).ready(function() {

	$("li").on("click", function() {

		if ($(this).hasClass("done")) {
			$(this).removeClass("done");
		} else {
			$(this).addClass("done");
		}
	});


	$("img").on("dblclick", function() {
		$("img").width(200); 

		$("h1").fadeOut();

		$(".booboo").slideUp();

		$("#rahul").hide();
	});

//	$("img").click(function() {
//	});

});

i was here
