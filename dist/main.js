$(document).ready(function () {
    'use strict';


      // console.log("test");
      var menuItems = $("#main-menu").html();
      // console.log(menuItems);

      var mobileMenu = $(".mobile-menu-inner");
      mobileMenu.html(menuItems);






    $(window).scroll(function () {

        var headerHight = $(".main-header").height();

        if ($(window).scrollTop() > headerHight) {
            $(".main-nav-container").addClass("sticky-navbar");
        } else {
            $(".main-nav-container").removeClass("sticky-navbar");
        }
    });


    // $(window).on("load", function () {
    //     var menuItems = $("#main-menu").html();

    //     var mobileMenu = $(".mobile-menu-inner");
    //     mobileMenu.html(menuItems);
    // });

    $("#mobile-menu-toggle").click(function () {
        $(".mobile-menu-container").addClass("active");
    });

    $(".close-mobile-menu").click(function () {
        $(".mobile-menu-container").removeClass("active");
    });



    /*----- Slider-active active -----*/
    // $('.testimonial-home-slider').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     item: 3,
    //     margin: 30,
    //     dots: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         1279: {
    //             items: 2
    //         }
    //     }
    // });







    // $(".mobile-menu-inner").on("click", ".inner-menu-toggle", function () {
    //     $(this).parent().children('.inner-menu-list').slideToggle();
    // });

    // $(".faq-btn").click(function () {
    //     $(this).toggleClass("active");
    // });



    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.slider-nav',
        prevArrow: $('.prev'),
              nextArrow: $('.next'),
        
        });
        $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        // centerPadding: '60px',
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 536,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
        });

        $(".faq-btn").click(function () {
            $(this).toggleClass("active");
        });














    AOS.init();

              // Activate lightcase 
              $('a[data-rel^=lightcase]').lightcase();


              (function() {

                var $imgs = $('#gallery .gallery-item');
                var $buttons = $('#buttons');
                var tagged = {};
                
                $imgs.each(function() {
                  var img = this;
                  var tags = $(this).data('tags');
                
                  if (tags) {
                    tags.split(',').forEach(function(tagName) {
                      if (tagged[tagName] == null) {
                        tagged[tagName] = [];
                      }
                      tagged[tagName].push(img);
                    });
                  }
                });
                
                $('<button/>', {
                  text: 'All Projects',
                  class: 'active',
                  click: function() {
                    $(this)
                      .addClass('active')
                      .siblings()
                      .removeClass('active');
                    $imgs.show();
                  }
                }).appendTo($buttons);
                
                $.each(tagged, function(tagName) {
                  $('<button/>', {
                    text: tagName,
                    click: function() {
                      $(this)
                        .addClass('active')
                        .siblings()
                        .removeClass('active');
                      $imgs
                        .hide()
                        .filter(tagged[tagName])
                        .show();
                    }
                  }).appendTo($buttons);
                });
                
                }());

});