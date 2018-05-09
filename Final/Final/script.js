if($('.cinfo').is(':visible')) {
    $(document).hover(function(){
      $('.cinfo').css("background-color", "#66cccc");
    }, function(){
      $('.cinfo').css("background-color", "white");
    });
}
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
        $(this).addClass("active");

    var menu_status = false;
    $('.show-menu').click(function() {
        if(menu_status) {
            $('.mobile_menu').css('margin-left', '-70%');
            menu_status = false;        
        } else {
            $('.mobile_menu').css('margin-left', '0px');
            menu_status = true;   
        }
    });

    $('.mobile_menu li a').click(function() {
        $('.mobile_menu').css('margin-left', '-70%');        
    });


});

$(function() {
	// Get page title
  	var pageTitle = $("title").text();

	// // Change page title on blur
	// $(window).blur(function() {
	//   $("title").text("☺ See you soon!");
	// });

	// Change page title back on focus
	$(window).focus(function() {
	  $("title").text(pageTitle);
	});
});
