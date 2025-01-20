(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();




    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);


function imgSlide(imgSrc){
    document.querySelector(".pepsi").src = imgSrc

}

function changeColors(color){
    const shape = document.querySelector(".shape");
    const button = document.querySelector(".learn-more");
    const pepsi = document.querySelector("h2.product-header span");
    shape.style.backgroundColor = color;
    button.style.backgroundColor = color;
    pepsi.style.color = color;
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(this);
    emailjs.sendForm('service_df65e1o', 'template_onmjow7', this)
        .then(function(result) {
            alert("Success!! Your query is generated in our system.");
            console.log(result.text);
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert("Error! Something went wrong.");
            console.log(error.text);
        });
});




window.onload = function() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    // Show the popup and overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';

    // Close the popup when the button is clicked
    closeBtn.onclick = function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    };

    // Close the popup when the overlay is clicked
    overlay.onclick = function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    };
};


$(function() {
    $('#nav-search-select').change(function() {
      var selectedText = $(this).find('option:selected').text();
      $('#nav-search').find('.nav-search-label').html(selectedText);
    });
  });
