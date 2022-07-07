/* ---------------------------- header navigation ----------------------------- */
   $(function(){
    /*Mobile Menu start*/    
    $("#nav-toggle").on( "click", function() {
        $(this).toggleClass( "active" );
        $("header").removeClass("newnav");
        $(".mainNav").toggleClass("openmenu");

    });
});


/* -------------------------- document Start ------------------ */

    
$(document).ready(function () {
    
    
    
var windowWidth = $(window).width();
if(windowWidth < 992){
    $(".mainNav li a.submenu").on( "click", function() {
        $(this).parent().toggleClass( "opensub" );
 });
}
        
    
  $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 87) { // check if user scrolled more than 50 from top of the browser window
           
          $(".nav-container").css("background-color", "#f6921e"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".nav-container").css("background-color", "transparent"); // if not, change it back to transparent
        }
      });       
    
  
    
   
    
    
    
    
    
    
    
    
    
/* -------------------------- carosel------------------ */  
    
 
    
  $('.trustee-slider').slick({
      
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,  
 slidesToScroll: 1,
 	arrows: false,
    dots:true,
 	infinite:true,
	autoplay:false,
 	speed:800,

    adaptiveHeight: true,
        responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
              centerMode:false,
            centerPadding: '0px',
          }
        }

      ]
    
      
       
});
    
    
    
    
    
 /* -------------------------- tabbing ------------------ */    
    
    

 $('.nav-tabs li a').eq($(this).val()).tab('show');
	  
    
    
  
  /* -------------------------- date------------------ */    
    
  $( ".datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "images/date.png",
      buttonImageOnly: true,
      buttonText: "Select date"
    });  
    

  /* --------------------------key features show hide---------- */     
    

  
  
    
    
    var $content1 = $(".kf-school-box ").hide();
    var $content2 = $(".kf-parent-box ").hide();
    
    
  $(".feature-school").on('click', function() {
            $('.school-parent').hide()
            $('.kf-school-box').toggle();
       
       
        $('.kfs-second').on('click', function() {
            $('.kf-school-box').hide();
        $(".kf-parent-box").toggle();
  });
       
       
       $('.kfp-first').on('click', function() {
            $('.kf-parent-box').hide();
        $(".kf-school-box").toggle();
  });
       
       
       
 });  
   
    

   $(".feature-parent").on('click', function() {
            $('.school-parent').hide()
            $('.kf-parent-box').toggle();
       
       
          $('.kfp-first').on('click', function() {
            $('.kf-parent-box').hide();
        $(".kf-school-box").toggle();
  });
       
        $('.kfs-second').on('click', function() {
            $('.kf-school-box').hide();
        $(".kf-parent-box").toggle();
  });
       
   
   
       
       
 });    
    
    
  /* --------------------------key features overlay for mobile---------- */    
    
  
 $('.fancybox').fancybox();   

    
    
/* -------------------------- document end ------------------ */   
     
       
});








