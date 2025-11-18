"use strict";
let title;
const right_bar = document.getElementById("right-bar") || null, submenu = document.querySelector(".submenu") || null;

function log(e) {
  console.log(e)
}

window.addEventListener("DOMContentLoaded", () => {
  title = document.querySelector("title").text
}), $(function () {
  let e, o = $(".content-overlay"), t = $(".about > .about-link"), a = $("#top_nav_icon_auth > .auth_menu li a");
  $("body");

  function s(e, t, a) {
    let s = $(".contacts_buttons > .contacts_form_wrapper");
    e.hasClass("open") ? o.trigger("click") : ($(".contacts_buttons").css("z-index", 9), $("body").addClass("fixed"), o.addClass("open"), e.addClass("open"), s.children(".contacts_form").css({transform: "translatex(" + a + "px)"}), $(".contact_form").length > 0 ? $(".contact_form").animate({opacity: 0}, 300, "linear", function () {
      s.children(".contacts_form").load(t, "", () => {
        s.addClass("open"), $("#CallbackForm_callback_form_page_title, #AppointmentForm_appointment_form_page_title, #ContactForm_ask_form_page_title").val(title)
      })
    }) : s.children(".contacts_form").load(t, "", () => {
      s.addClass("open"), $("#CallbackForm_callback_form_page_title, #AppointmentForm_appointment_form_page_title, #ContactForm_ask_form_page_title").val(title)
    }))
  }

  function n() {
    $("#top_nav_icon_auth").hasClass("open") && $("#top_nav_icon_auth").removeClass("open"), $(".about > .about_bar").hasClass("open") && $(".about > .about_bar").removeClass("open")
  }

  $(document).on("click", ".main_logo .about", function (e) {
    e.stopPropagation(), disableScroll(), $("#top_nav_icon_auth").hasClass("open") && $("#top_nav_icon_auth").removeClass("open"), $(".contacts-buttons-wrapper  div.open").removeClass("open"), $(".contacts_form_wrapper").removeClass("open");
    let a = $(".about > .about_bar");
    return a.hasClass("open") && $(e.target).hasClass("about-link") ? $("body").removeClass("fixed") : $("body").addClass("fixed"), a.hasClass("open") && $(e.target).hasClass("about-link") ? o.removeClass("open") : o.addClass("open"), a.hasClass("open") && $(e.target).hasClass("about-link") ? a.removeClass("open") : a.addClass("open"), a.hasClass("open") && $(e.target).hasClass("about-link") ? t.removeClass("active") : t.addClass("active"), !0
  }), $(".about_bar > .popup_menu_pic_wrapper > .close_mark").on("click", function (e) {
    e.stopPropagation(), enableScroll();
    let a = $(".about > .about_bar");
    return a.hasClass("open") ? a.removeClass("open") : a.addClass("open"), o.trigger("click"), t.removeClass("active"), enableScroll(), !0
  }), $("#top_nav_icon_search").on("click", function (e) {
    e.stopPropagation(), addSpiner(), $("#SearchForm").submit()
  }), $(".search-scroll-button").on("click", function (e) {
    e.stopPropagation(), addSpiner(), $("#SearchForm_scroll").submit()
  }), $(document).on("click", "#top_nav_icon_auth", function (e) {
    e.stopPropagation(), disableScroll(), $(".about > .about_bar").hasClass("open") && $(".about > .about_bar").removeClass("open"), $(".contacts-buttons-wrapper div.open").removeClass("open"), $(".contacts_form_wrapper").removeClass("open");
    let s = $("#top_nav_icon_auth");
    return s.hasClass("open") && $(e.target).hasClass("about-link") ? $("body").removeClass("fixed") : $("body").addClass("fixed"), s.hasClass("open") && $(e.target).hasClass("about-link") ? o.removeClass("open") : o.addClass("open"), s.hasClass("open") && $(e.target).hasClass("about-link") ? s.removeClass("open") : s.addClass("open"), s.hasClass("open") && $(e.target).hasClass("about-link") ? a.removeClass("active") : t.addClass("active"), !0
  }), $("#top_nav_icon_auth > .auth_menu .popup_menu_pic_wrapper > .close_mark").on("click", function (e) {
    e.stopPropagation(), enableScroll();
    let t = $("#top_nav_icon_auth");
    return t.hasClass("open") ? t.removeClass("open") : t.addClass("open"), o.trigger("click"), a.removeClass("active"), enableScroll(), !0
  }), $(document).on("click", "#stiky-menu-wrapper > .about_bar > .popup_menu_pic_wrapper > .close_mark", function (e) {
    $(".logo_scroll_wrapper").trigger("click"), enableScroll()
  }), $(".logo_scroll_wrapper").on("click", function (e) {
    if ($(e.target).parent().is("a")) return !0;
    e.stopPropagation(), disableScroll();
    let t = $(".about_bar"), a = $("#stiky-menu-wrapper");
    a.hasClass("open") ? (a.removeClass("open"), $("body").removeClass("fixed"), o.trigger("click"), setTimeout(function () {
      $("#stiky-menu-wrapper > .about_bar").remove()
    }, 300)) : (t.clone().appendTo(a), setTimeout(function () {
      a.addClass("open"), o.addClass("open"), $("body").addClass("fixed")
    }, 100))
  }), $(".submenu > span, .menu_direction .close_mark").on("click", function (e) {
    e.stopPropagation(), enableScroll();
    let t = $(".submenu > .menu_direction");
    $(".right-bar-li.open").removeClass("open"), t.hasClass("open") ? ($("body").removeClass("fixed"), o.removeClass("open"), t.removeClass("open"), right_bar.classList.remove("active")) : ($("body").addClass("fixed"), o.addClass("open"), t.addClass("open"), right_bar && right_bar.classList.add("active"))
  }), $(".doctor-directions, .doctor-directions > .menu_direction .close_mark").on("click", function (e) {
    if (e.stopPropagation(), $(e.target).is("a")) return !0;
    let t = $(".resume_title_link > .menu_direction");
    return t.hasClass("open") ? $("body").removeClass("fixed") : $("body").addClass("fixed"), t.hasClass("open") ? o.removeClass("open") : o.addClass("open"), t.hasClass("open") ? t.removeClass("open") : t.addClass("open"), !1
  }), $(".doctors-smies, .doctors-smies .popup_dir_relev_window_wrapper .close_mark").on("click", function (e) {
    e.stopPropagation();
    let t = $(".doctors-smies  .popup_dir_relev_window_wrapper");
    t.hasClass("open") ? $("body").removeClass("fixed") : $("body").addClass("fixed"), t.hasClass("open") ? o.removeClass("open") : o.addClass("open"), t.hasClass("open") ? t.removeClass("open") : t.addClass("open")
  }), $(".doctor-articles, .doctor-articles .popup_dir_relev_window_wrapper .close_mark").on("click", function (e) {
    e.stopPropagation();
    let t = $(".doctor-articles  .popup_dir_relev_window_wrapper");
    t.hasClass("open") ? $("body").removeClass("fixed") : $("body").addClass("fixed"), t.hasClass("open") ? o.removeClass("open") : o.addClass("open"), t.hasClass("open") ? t.removeClass("open") : t.addClass("open")
  }), $(document).on("click", ".contacts_buttons > .contacts-buttons-wrapper > .callback", function (e) {
    let o = $(this), t = $(".contacts_buttons >.contacts-buttons-wrapper >.contacts_form_wrapper >.contacts_form");
    n(), t.hasClass("open") ? t.removeClass("open") : t.addClass("open"), s(o, "/site/callback", isIpad() ? 0 : -250), $(".contacts_buttons  .appointment, .contacts_buttons  .question").removeClass("open")
  }), $(document).on("click", ".contacts_buttons > .contacts-buttons-wrapper > .appointment", function (e, o) {
    let t = $(this), a = $(".contacts_buttons >.contacts-buttons-wrapper >.contacts_form_wrapper > .appointment_form");
    n(), a.hasClass("open") ? a.removeClass("open") : a.addClass("open"), s(t, "/site/appointment", isIpad() ? 0 : 60), $(".contacts_buttons  .callback, .contacts_buttons  .question").removeClass("open")
  }), $(document).on("click", ".contacts_buttons > .contacts-buttons-wrapper > .question", function (e) {
    let o = $(this), t = $(".contacts_buttons > .contacts-buttons-wrapper >.question_form");
    n(), t.hasClass("open") ? t.removeClass("open") : t.addClass("open"), s(o, "/site/question", isIpad() ? 0 : 260), $(".contacts_buttons  .callback, .contacts_buttons  .appointment").removeClass("open")
  }), $(document).on("click", "body", function (e) {
    let t = $(e.target);
    (t.hasClass("header-wrapper") || t.parents(".header-wrapper").hasClass("header-wrapper") || t.is("header")) && o.trigger("click")
  }), $(document).on("click", ".right-bar > .right-bar-li", function (e) {
    e.stopPropagation();
    let t = $(this), a = t.parent("ul"), s = t.children(".popup_dir_relev_window_wrapper").children(".popup_pointer");
    if (!$(e.target).hasClass("right-bar-li") && !$(e.target).closest("div").hasClass("close_mark")) return !0;
    let n = t.children(":first");
    if (n.is("a") && (window.location.href = n.attr("href")), $(".right-bar > .right-bar-li").each(function () {
      t[0] !== $(this)[0] && $(this).removeClass("open")
    }), t.hasClass("open") ? $("body").removeClass("fixed") : $("body").addClass("fixed"), t.hasClass("open") ? o.removeClass("open") : o.addClass("open"), t.hasClass("open") ? t.removeClass("open") : t.addClass("open"), a.hasClass("open") ? a.removeClass("open") : a.addClass("open"), $(".right-bar > .right-bar-li").trigger("mouseleave"), $(".submenu > .menu_direction").removeClass("open"), null != submenu && submenu.classList.add("active"), t.hasClass("open")) try {
      let o = t.children(".popup_dir_relev_window_wrapper").offset().left - 385, n = t.offset().left;
      s.css({"margin-left": n - o}), a.addClass("open")
    } catch (e) {}
  }), $(document).on("mouseenter", ".right-bar > .right-bar-li", function (o) {
    let t = $(this), a = !1;
    if ($(".right-bar > .right-bar-li").each(function (e, o) {
      $(o).hasClass("open") && (a = !0)
    }), !t.hasClass("open") && !a) {
      let o = t.offset().top + 40, a = t.offset().left;
      $("body").append('<div class="menu-hint" style="top:' + o + 'px;">' + t.attr("aria-label") + "</div>"), e = setTimeout(function () {
        let e = $(".menu-hint"), o = e.outerWidth();
        e.outerHeight();
        e.css("left", a - o / 2 + 17), e.css({transform: "scale(1)", opacity: 1})
      }, 200)
    }
  }), $(document).on("mouseleave", ".right-bar > .right-bar-li", function (o) {
    clearTimeout(e), $("body").children(".menu-hint").stop().css({transform: "scale(0)"}).animate({opacity: 1}, 150, "easeOutCubic", function () {
      $(this).remove()
    })
  }), o.click(function (e) {
    if (e.stopPropagation(), e.preventDefault(), $("body").removeClass("fixed"), $("#stiky-menu-wrapper .about_bar").remove(), null != right_bar && right_bar.classList.remove("active"), null != submenu && submenu.classList.remove("active"), $(".contacts_buttons > .contacts-buttons-wrapper > div.open").length > 0) {
      let e = $(".contacts_buttons > .contacts_form_wrapper");
      $(".contacts_buttons").removeAttr("style"), e.animate({top: "-700px"}, 300, "linear", function () {
        e.children(".contacts_form").empty(), $('.open:not(".portlet-decoration")').removeClass("open"), t.removeClass("active"), enableScroll(), e.css("top", 0)
      })
    } else $('.open:not(".portlet-decoration")').removeClass("open"), t.removeClass("active"), enableScroll()
  }), $(document).on("click", ".collapsable", function (e) {
    let o = $(".aside_left");
    o.hasClass("collapse") ? $.cookie("show_menu", 1, {path: "/"}) : $.cookie("show_menu", 0, {path: "/"}), o.hasClass("collapse") ? o.removeClass("collapse") : o.addClass("collapse")
  }), $(document).on("mouseenter", ".portlet-title", function (o) {
    let t = $(this), a = t.parents(".aside_left").hasClass("collapse"), s = t.offset().top + 1,
      n = t.offset().left + 40;
    a && ($("body").append('<div class="menu-hint" style="top:' + s + "px; left:" + n + 'px;">' + t.attr("aria-label") + "</div>"), e = setTimeout(function () {
      let e = $(".menu-hint");
      e.outerWidth(), e.outerHeight();
      e.css({transform: "scale(1)", opacity: 1})
    }, 200))
  }).on("mouseleave", ".portlet-title", function (o) {
    $(this).parents(".aside_left");
    clearTimeout(e), $("body").children(".menu-hint").stop().css({transform: "scale(0)"}).animate({opacity: 1}, 150, "easeOutCubic", function () {
      $(this).remove()
    })
  }), $(document).on("mouseenter", ".resume_title_marker", function (o) {
    let t = $(this);
    if (!t.hasClass("open")) {
      let o = t.offset().top + t.height() + 4, a = t.offset().left;
      $("body").append('<div class="menu-hint" style="top:' + o + 'px;">' + t.attr("aria-label") + "</div>"), e = setTimeout(function () {
        let e = $(".menu-hint"), o = e.outerWidth();
        e.css("left", a - o / 2 + t.width() / 2), e.css({transform: "scale(1)", opacity: 1})
      }, 200)
    }
  }), $(document).on("mouseleave", ".resume_title_marker", function (o) {
    clearTimeout(e), $("body").children(".menu-hint").stop().css({transform: "scale(0)"}).animate({opacity: 1}, 150, "easeOutCubic", function () {
      $(this).remove()
    })
  }), $("#button_show-comment-form").on("click", function (e) {
    e.preventDefault(), e.stopPropagation(), disableScroll();
    let t = "calc(50% - " + $(".comments-form-wrapper").height() / 2 + "px)";
    $(".comments-form-wrapper").addClass("open").css("top", t), $("body").addClass("fixed"), o.addClass("open")
  }), $("#button_show-consult-form").on("click", function (e) {
    e.preventDefault(), e.stopPropagation(), disableScroll();
    let t = "calc(50% - " + $(".consultations-form-wrapper").height() / 2 + "px)";
    $(".consultations-form-wrapper").addClass("open").css("top", t), $("body").addClass("fixed"), o.addClass("open")
  })
}), jQuery(function (e) {
  let o = e(".logo_scroll"), t = e("#stiky-menu-wrapper"), a = e("#search_scroll"), s = e(".contacts");
  !isMobile() && screen.width > 1024 && e(window).scroll(function () {
    $(".portlet-title").trigger("mouseleave"), o["fade" + (e(this).scrollTop() > 100 ? "In" : "Out")](500), t["fade" + (e(this).scrollTop() > 100 ? "In" : "Out")](500), a["fade" + (e(this).scrollTop() > 100 ? "In" : "Out")](500), s[e(this).scrollTop() > 144 ? "addClass" : "removeClass"]("sticky")
  })
});
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) return preventDefault(e), !1
}

function disableScroll() {
  window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, {passive: !1}), document.addEventListener("wheel", preventDefault, {passive: !1}), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
  window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), document.removeEventListener("wheel", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
}

function searchSpinner(e) {
  let o = document.getElementById(e);
  null != o && o.addEventListener("submit", e => {
    addSpiner()
  })
}

function addSpiner() {
  let e = document.createElement("div");
  e.setAttribute("id", "page-preloader");
  let o = document.createElement("div");
  o.classList.add("spinner"), e.append(o), document.body.append(e)
}

$(document).ready(function () {
  setTimeout(function () {
    $("#index_news .index_announcement .index_announcement_text").each(function () {
      $(this).height() > 437 && $(this).children(":last-child").addClass("truncate")
    })
  }, 200), $("[data-parallax]").parallax()
}), document.addEventListener("DOMContentLoaded", () => {
  searchSpinner("search-form")
});