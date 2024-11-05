/*swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,  // Autoplay continues even after user interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});*/

// tabbed content
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function() {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});

/* if in drawer mode */
$(".tab_drawer_heading").click(function() {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});

/* Extra class "tab_last" 
   to add border to right side
   of last tab */
$('ul.tabs li').last().addClass("tab_last");


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

/*ScrollReveal().reveal('.rexx-section-main-heading', {delay:500, origin: 'left'});
ScrollReveal().reveal('.rexx-section-main-para', {delay:600, origin: 'left'});


ScrollReveal().reveal('.features-sub-card-container', {delay:500, origin: 'bottom'});

ScrollReveal().reveal('.tab-how-card-container', {delay:500, origin: 'left'});

ScrollReveal().reveal('.how-work-cards', {delay:500, origin: 'right'});*/