/*
* Portfolio main interactions
*/

(function ($) {
  "use strict";

  var $body = $("body");
  var $nav = $(".custom-navbar");
  var $menu = $("#main-navbar");
  var $burger = $(".burger");
  var $backTop = $(".back-to-top");

  function setMenuOpen(open) {
    $burger.toggleClass("active", open);
    $menu.toggleClass("show", open);
    $body.css("overflow", open ? "hidden" : "");
    $burger.attr("aria-expanded", open ? "true" : "false");
    $burger.attr("aria-label", open ? "Close menu" : "Open menu");
  }

  var burgerMenu = function () {
    $burger.on("click", function (e) {
      e.preventDefault();
      setMenuOpen(!$burger.hasClass("active"));
    });

    $menu.on("click", "a", function () {
      setMenuOpen(false);
    });

    $(document).on("keydown", function (e) {
      if (e.key === "Escape") setMenuOpen(false);
    });
  };
  burgerMenu();

  var siteIstotope = function () {
    var $container = $("#portfolio-grid");
    if (!$container.length || typeof $.fn.isotope !== "function") return;

    $container.isotope({
      itemSelector: ".item",
      percentPosition: true,
      masonry: {
        columnWidth: ".item"
      }
    });

    $container.imagesLoaded && $container.imagesLoaded(function () {
      $container.isotope("layout");
    });

    // reflow after images without imagesLoaded plugin
    $container.find("img").on("load", function () {
      $container.isotope("layout");
    });

    $(window).on("resize", function () {
      $container.isotope("layout");
    });

    $("#filters").on("click", "a", function (e) {
      e.preventDefault();
      var filterValue = $(this).attr("data-filter");
      $container.isotope({ filter: filterValue });
      $("#filters a").removeClass("active").attr("aria-selected", "false");
      $(this).addClass("active").attr("aria-selected", "true");
    });
  };

  $(window).on("load", function () {
    siteIstotope();
  });

  // Sticky nav shadow + back to top
  var onScroll = function () {
    var y = $(window).scrollTop();
    $nav.toggleClass("scrolled", y > 12);
    $backTop.toggleClass("show", y > 420);
  };
  $(window).on("scroll", onScroll);
  onScroll();

  $backTop.on("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  var siteOwlCarousel = function () {
    if (!$(".testimonial-carousel").length) return;
    $(".testimonial-carousel").owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000
    });
  };
  siteOwlCarousel();

  // Contact: client-only mailto (no PHP backend)
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    var form = this;
    var note = document.getElementById("contact-form-note");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var name = $.trim($("#name").val());
    var email = $.trim($("#email").val());
    var subject = $.trim($("#subject").val());
    var message = $.trim($("#message").val());
    var body =
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      message;

    var href =
      "mailto:dhanjoenkp@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    if (note) {
      note.hidden = false;
      note.textContent = "Opening your email app…";
    }
    window.location.href = href;
  });

})(jQuery);

AOS.init({
  easing: "ease-out-cubic",
  duration: 800,
  once: true,
  offset: 40
});
