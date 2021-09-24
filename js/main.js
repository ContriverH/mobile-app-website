$(window).on("load", function () {
  // =============== Preloader ===============
  $(".preloader").fadeOut("slow");
});

$(document).ready(function () {
  // =============== Navbar shrink ===============
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });
  // =============== Video popup ===============
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });

  // =============== Features carousel ===============

  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // =============== Screenshots carousel ===============

  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // =============== Testimonials carousel ===============

  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // =============== Team carousel ===============

  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // =============== Page scrolling - ScrollIt ===============
  $.scrollIt({
    topOffset: -50,
  });

  // =============== Bavbar Collpase ===============
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // =============== Toggle theme - light & dark theme ===============
  function toggleTheme() {
    if (localStorage.getItem("bworld-theme") !== null) {
      if (localStorage.getItem("bworld-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();

  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("bworld-theme", "dark");
    } else {
      localStorage.setItem("bworld-theme", "light");
    }
    updateIcon();
  });

  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i").addClass("fa-moon");
    }
  }
});
