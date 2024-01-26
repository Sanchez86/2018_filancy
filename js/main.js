$(document).ready(function () {


    $('.pr').on('mouseenter', function(){
        $(this).addClass('active')
    })

    var chrome   = navigator.userAgent.indexOf('Chrome') > -1;
    var safari   = navigator.userAgent.indexOf("Safari") > -1;
    var opera    = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((chrome) && (safari)) safari = false;
    if ((chrome) && (opera)) chrome = false;
    if (safari) $('body').addClass('is_safari');

    new WOW().init();
    
    $('.projects_body .read_more').on('click', function(){
        $('.prs2').addClass('active');
        $('.discuss_read_more').addClass('hidden');
        $('.discuss_read_more2').addClass('active');

        var benefitsBlock = $('#prs2').offset().top;
        $('body, html').animate({
            scrollTop: benefitsBlock+50
        }, 1000);
    });
     
  });