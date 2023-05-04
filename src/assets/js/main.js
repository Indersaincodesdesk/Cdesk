// --------- header toggle-------------
$(document).ready(function() {

    $('.mobile-nav').bind('click', function(event) {
        $('.menu-wrapper ul').slideToggle();
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 768) {
            $('.menu-wrapper ul').removeAttr('style');
        }
    });

});
// 
$(document).on("click", "#toggle", function() {
    $(this).toggleClass("on");
    $("#menu").slideToggle();
});

// ------------ About us tabs -----------

$(document).ready(function() {
    $('.tab-heading').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).siblings('.tabcontent').slideUp();
            $(this).removeClass('active');
        } else {
            $('.tabcontent').slideUp();
            $('tab-heading').removeClass('active');
            $(this).siblings('.tabcontent').slideDown();
            $(this).toggleClass('active');
        }
    });
});

// ---------- homepage about tabs --------------

$(document).ready(function() {
    var previousActiveTabIndex = 0;

    $(".tabswitcher").on('click keypress', function(event) {

        if ((event.type === "keypress" && event.which === 13) || event.type === "click") {


            var tabClicked = $(this).data("tab-index");

            if (tabClicked != previousActiveTabIndex) {
                $("#allTabContainer .tabcontainer").each(function() {
                    if ($(this).data("tab-index") == tabClicked) {
                        $(".tabcontainer").hide();
                        $(this).show();
                        previousActiveTabIndex = $(this).data("tab-index");
                        return;
                    }
                });
            }
            $('.tabswitcher .tablinks.active').removeClass('active');
            $(this).children().addClass('active');
        }
    });
});

// ------------homepage Our-work ---------
// end
// ------------our-work ----------

$(document).ready(function() {
    var previousActiveTabIndex = 0;

    $(".tab-switcher").on('click keypress', function(event) {

        if ((event.type === "keypress" && event.which === 13) || event.type === "click") {


            var tabClicked = $(this).data("tab-index");

            if (tabClicked != previousActiveTabIndex) {
                $("#allTabsContainer .tab-container").each(function() {
                    if ($(this).data("tab-index") == tabClicked) {
                        $(".tab-container").hide();
                        $(this).show();
                        previousActiveTabIndex = $(this).data("tab-index");
                        return;
                    }
                });
            }
            $('.tab-switcher .tablinks.active').removeClass('active');
            $(this).children().addClass('active');
        }
    });
});

// ------------ Counter -------------

var e = setInterval(function() {
    if ($("#counter-main").length) {
        var t = function() {
                var a = $("#counter-main").offset().top - $(window).scrollTop(),
                    n = $(window).width();
                n > 1500 ? a < 650 && a != "undefined" && ($(window).off("scroll", t), $(".counter").each(function() {
                    var r = $(this).find(".counter-head");
                    $({
                        Counter: 1
                    }).animate({
                        Counter: r.text()
                    }, {
                        duration: 4e3,
                        easing: "swing",
                        step: function() {
                            r.text(Math.ceil(this.Counter))
                        }
                    })
                })) : a < 600 && a != "undefined" && ($(window).off("scroll", t), $(".counter").each(function() {
                    var r = $(this).find(".counter-head");
                    $({
                        Counter: 1
                    }).animate({
                        Counter: r.text()
                    }, {
                        duration: 4e3,
                        easing: "swing",
                        step: function() {
                            r.text(Math.ceil(this.Counter))
                        }
                    })
                }))
            },
            o = t;
        $(window).scroll(t), clearInterval(e)
    }
}, 1e3)