jQuery(function ($) {

  new WOW().init();
/**        filter_container = $("#projectGallery");
  
        filter_container.children().css('position', 'relative');
        filter_container.masonry({
          singleMode: true,
          itemSelector: '.galleryItem:not(.hide)',
          animate: true,
          animationOptions: { duration: 800, queue: false }
        });
        $(window).resize(function () {
          var temp_width = filter_container.children().filter(':first')();
          filter_container.masonry({
            columnWidth: temp_width,
            singleMode: true,
            itemSelector: '.galleryItem:not(.hide)',
            animate: true,
            animationOptions: { duration: 800, queue: false }
          });
        });
        $('ul#projectTabs a').click( function () {
  
          $(this).addClass("active");
          $(this).parents("li").siblings().children("a").removeClass("active");
       
  
          var select_filter = $(this).attr('data-value');
  
          if (select_filter == "all" || $(this).parent().index() == 0) {
            filter_container.children().each(function () {
              if ($(this).hasClass('hide')) {
                $(this).removeClass('hide');
                $(this).fadeIn();
              }
            });
          } else {
            filter_container.children().not('.' + select_filter).each(function () {
              if (!$(this).hasClass('hide')) {
                $(this).addClass('hide');
                $(this).fadeOut();
              }
            });
            filter_container.children('.' + select_filter).each(function () {
              if ($(this).hasClass('hide')) {
                $(this).removeClass('hide');
                $(this).fadeIn();
              }
            });
          }
  
          filter_container.masonry();
  
        });
 */

    
        $(".nav-link").click(function(){
          $(".nav-link").removeClass("active");
          $(this).addClass("active");
        });
   
          function onScroll(event){
			
            var scrollPosition = $(document).scrollTop();
            $('.nav-item a[href^="#"').each(function () {
              console.log($(this).attr('href')); 
              var refElement = $($(this).attr("href"));
            //   console.log($(this).attr("href")); //log
              if (refElement.length&&refElement.position().top-150 <= scrollPosition) {
              $('.nav-link').removeClass("active");
              $(this).addClass("active");
              }
       
              else{
              $(this).removeClass("active"); 
              }
          
            });
            }
            $(document).on("scroll", onScroll);
            $('.navbar-collapse ul li a').on('click', function () {
              if($(this).attr('href')=="#services"){
                $('html, body').animate({ scrollTop: $(this.hash).offset().top -300 }, 1000);
                $('.navbar-collapse.collapse.in').removeClass('in');
                $('.navbar-collapse').collapse("hide");

              }  
              else if($(this).attr('href')=="index.html"){
              return 0;

              }
              else{
                $('html, body').animate({ scrollTop: $(this.hash).offset().top -100 }, 1000);
                $('.navbar-collapse.collapse.in').removeClass('in');
                $('.navbar-collapse').collapse("hide");

              }
            
              return false;
            });
        
          
            $(window).scroll(function () {
              scrollTop = $(window).scrollTop();
            
               if( scrollTop >$('header').height()){
                  $('header').addClass('scrollNav');
            
            
               }
               else{
                  $('header').removeClass('scrollNav');    
            
               }
               
              });
           
        
            $('.up a').on('click', function () {
              $('html, body').animate({ scrollTop: $(this.hash).offset().top  }, 1000);
            });
            setTimeout(function(){
          
              $('.ourTeamCarousel').owlCarousel({
                loop:true,
                margin:20,
                nav:true,
                animateIn: 'flipInX',
                navText :['<i class="lni-chevron-left"></i>','<i class="lni-chevron-right"></i>'],

              responsive:{
              0:{
                items:1
              },
              600:{
                items:2
              },
              1000:{
                items:4
              },
             
              }
              });
              $('.BlogCarousel').owlCarousel({
                loop:true,
                margin:20,
                nav:true,
              responsive:{
              0:{
                items:1
              },
              600:{
                items:2
              },
              1000:{
                items:3
              }
              }
              });
              $('.ConsultCarousel').owlCarousel({
                autoplay:true,
                loop:true,
                margin:40,
                dots:true,
              responsive:{
              0:{
                items:3
              },
              600:{
                items:4
              },
              1000:{
                items:6
              }
              }
              });
              $(".projectGallery").owlCarousel({
                loop:true,
                margin:40,
                dots:false,
                nav:true,
              responsive:{
              0:{
                items:1
              },
              600:{
                items:2
              },
              1000:{
                items:4
              }
              }
              });
            },3000)
            $('.TestiMonialsCarusel').owlCarousel({
              loop:true,
              margin:20,
              nav:true,
              dots:false,
              navText :['<i class="lni-chevron-left"></i>','<i class="lni-chevron-right"></i>'],
            responsive:{
            0:{
              items:1
            },
            600:{
              items:1
            },
            1000:{
              items:1
            }
            }
            });
   
            $('select').selectric({
              disableOnMobile: false,
              nativeOnMobile: false
            });
            $("button.close").click(function(){
              $('.navbar-collapse').collapse("hide");});
});


