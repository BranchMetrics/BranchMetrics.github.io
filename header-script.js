
  $(document).scroll(function(){
    var navbarBase = $('.navbar-container');

    if (navbarBase.hasClass('dynamic')) {
      var scrollDistance = $(window).scrollTop();
      var navbarShadow = $('header.dynamic.extended > nav');
      var navbarLogo = $('.brand-bar');
      var desktopNavLinks = $('.desktop-menu');
      var mobileNavToggle = $('.branch-menu');

      if ($(document).width() >= 992) {
        if(scrollDistance == 0 ){
          navbarShadow.css('background-color', 'rgba(255,255,255,0)');
        }
        else if($(document).scrollTop() > 60 ) {
          navbarLogo.css('margin-top','');
          desktopNavLinks.css('margin-top','')
          navbarShadow.css('background-color', 'rgba(255,255,255,1)');
          navbarBase.removeClass('extended');
        }
        else{
          var scrollRatio = 60/scrollDistance;
          var opacity=(0.4 * scrollDistance/60);
          navbarLogo.css('margin-top', Math.max(16 - 16 / scrollRatio, 0));
          desktopNavLinks.css('margin-top', Math.max(16 - 16 / scrollRatio, 0));
          navbarShadow.css('background-color', 'rgba(255,255,255,'+opacity+')');
          navbarBase.addClass('extended');
        }
      } else if ($(document).width() < 992) {
        if($(document).scrollTop() > 49 ) {
          navbarLogo.css('margin-top','0');
          mobileNavToggle.css('margin-top','0');
          navbarShadow.css('background-color', 'rgba(255,255,255,1)');
          navbarBase.removeClass('extended');
        }
        else{
          var scrollRatio = 49/scrollDistance;
          navbarLogo.css('margin-top', Math.max(16 - 16 / scrollRatio, 0));
          mobileNavToggle.css('margin-top', Math.max(16 - 16 / scrollRatio, 0));
          navbarShadow.css('background-color', 'rgba(255,255,255,'+(0.4 * scrollDistance/60)+')');
          navbarBase.addClass('extended');
        }
      }
    }


  });

  $(document).ready(function(){
    $('.nav-open').on('click', function(){
      $('html').addClass('mobile-nav-open');
      $('.mobile-nav').addClass('open');
      $('.close-btn-cont').addClass('animate');
    })

    $('.nav-close-all').on('click', function(){
      $('html').removeClass('mobile-nav-open');
      $('.mobile-nav').addClass('animate-close');
      $('.mobile-nav-1').addClass('animate-close');
      $('.mobile-nav-2').addClass('animate-close');
      $('.mobile-nav-3').addClass('animate-close');
      $('.close-btn-cont').removeClass('animate');
      setTimeout(function(){
        $('.mobile-nav').removeClass('open');
        $('.mobile-nav').removeClass('nav-1-open');
        $('.mobile-nav').removeClass('nav-2-open');
        $('.mobile-nav').removeClass('nav-3-open');
        $('.mobile-nav-1').removeClass('open');
        $('.mobile-nav-3').removeClass('open');
        $('.mobile-nav-2').removeClass('open');
        $('.mobile-nav').removeClass('animate-close');
        $('.mobile-nav-1').removeClass('animate-close');
        $('.mobile-nav-2').removeClass('animate-close');
        $('.mobile-nav-3').removeClass('animate-close');
      }, 200)
    })

    $('.nav-1-js').on('click', function(){
      $('.mobile-nav-1').addClass('open');
      $('.mobile-nav').addClass('nav-1-open');
    })

    $('.nav-2-js').on('click', function(){
      $('.mobile-nav-2').addClass('open');
      $('.mobile-nav').addClass('nav-2-open');
    })

    $('.nav-3-js').on('click', function(){
      $('.mobile-nav-3').addClass('open');
      $('.mobile-nav').addClass('nav-3-open');
    })

    $('.subnav .header').on('click', function(){
      $('.mobile-nav').removeClass('nav-1-open');
      $('.mobile-nav').removeClass('nav-2-open');
      $('.mobile-nav').removeClass('nav-3-open');
      $('.mobile-nav-1').removeClass('open');
      $('.mobile-nav-2').removeClass('open');
      $('.mobile-nav-3').removeClass('open');
    })

  })


var Strut = {
  queryArray: function(t, n) {
      return n || (n = document.body),
      Array.prototype.slice.call(n.querySelectorAll(t))
  },
  ready: function(t) {
      "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
  }
};

Strut.touch = {
    isSupported: "ontouchstart"in window || navigator.maxTouchPoints,
    isDragging: !1
}


function globalNavDropdowns(t){

var n = this;
    this.container = document.querySelector(t),
    this.root = this.container.querySelector(".nav-root"),
    this.container.classList.add("no-dropdown-transition"),
    this.dropdownBackground = this.container.querySelector(".dropdown-background"),
    this.dropdownContainer = this.container.querySelector(".dropdown-container"),
    this.dropdownArrow = this.container.querySelector(".dropdown-arrow"),
    this.dropdownRoots = Strut.queryArray(".has-dropdown", this.root),
    this.dropdownSections = Strut.queryArray(".dropdown-section", this.container).map(function(t) {
        return {
            el: t,
            name: t.getAttribute("data-dropdown"),
            content: t.querySelector(".dropdown-content")
        }
    });
    var e = window.PointerEvent ? {
        end: "pointerup",
        enter: "pointerenter",
        leave: "pointerleave"
    } : {
        end: "touchend",
        enter: "mouseenter",
        leave: "mouseleave"
    };
    this.dropdownRoots.forEach(function(t) {
        t.addEventListener(e.end, function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            n.toggleDropdown(t)
        }),
        t.addEventListener(e.enter, function(e) {
            "touch" != e.pointerType && (n.stopCloseTimeout(),
            n.openDropdown(t))
        }),
        t.addEventListener(e.leave, function(t) {
            "touch" != t.pointerType && n.startCloseTimeout()
        })
    })
    this.dropdownContainer.addEventListener(e.end, function(t) {
        t.stopPropagation()
    }),
    this.dropdownContainer.addEventListener(e.enter, function(t) {
        "touch" != t.pointerType && n.stopCloseTimeout()
    }),
    this.dropdownContainer.addEventListener(e.leave, function(t) {
        "touch" != t.pointerType && n.startCloseTimeout()
    }),
    document.body.addEventListener(e.end, function() {
        Strut.touch.isDragging || n.closeDropdown()
    })
}

globalNavDropdowns.prototype.openDropdown = function(t) {
    var n = this;
    if (this.activeDropdown !== t) {
        this.container.classList.add("dropdown-active"),
        this.activeDropdown = t,
        this.dropdownRoots.forEach(function(t) {
            t.classList.remove("active")
        }),
        t.classList.add("active");
        var e, i, o, r = t.getAttribute("data-dropdown"), a = "left";
        this.dropdownSections.forEach(function(t) {
            t.el.classList.remove("active"),
            t.el.classList.remove("left"),
            t.el.classList.remove("right"),
            t.name == r ? (t.el.classList.add("active"),
            a = "right",
            e = t.content.offsetWidth,
            i = t.content.offsetHeight,
            t.content.getAttribute("data-fixed") ? t.content.setAttribute("data-fixed", !0) : (t.content.style.width = e + "px",
            t.content.style.height = i + "px"),
            o = t.content) : t.el.classList.add(a)
        });
        var s = 380
          , c = 400
          , d = e / s
          , l = i / c
          , u = t.getBoundingClientRect()
          , p = u.left + u.width / 2 - e/2 - $('.desktop-menu').offset().left;

        //dropdown position calculated like so:
        // navEle.posLeft + 1/2*sizeOf(navEle) - 1/2*sizeOf(dropdown) - nav.posLeft
        p = Math.round(Math.max(p, 10));

        // console.log("uleft: "+u.left+" // uwidth: "+u.width +" // e: "+e +" // p: "+p);
        clearTimeout(this.disableTransitionTimeout),
        this.enableTransitionTimeout = setTimeout(function() {
            n.container.classList.remove("no-dropdown-transition")
        }, 50),
        this.dropdownBackground.style.transform = "translateX(" + p + "px) scaleX(" + d + ") scaleY(" + l + ")",
        this.dropdownContainer.style.transform = "translateX(" + p + "px)",
        this.dropdownContainer.style.width = e + "px",
        this.dropdownContainer.style.height = i + "px";

        //arrow position
        var w = Math.round(u.left + u.width / 2) - $('.desktop-menu').offset().left;

        this.dropdownArrow.style.transform = "translateX(" + w + "px) rotate(45deg)";
        var f = o.children[0].offsetHeight / l;
        window.siteAnalytics && window.siteAnalytics.trackGlobalNavDropdownOpen && window.siteAnalytics.trackGlobalNavDropdownOpen(r)
    }
}

globalNavDropdowns.prototype.closeDropdown = function() {
    var t = this;
    this.activeDropdown && (this.dropdownRoots.forEach(function(t) {
        t.classList.remove("active")
    }),
    clearTimeout(this.enableTransitionTimeout),
    this.disableTransitionTimeout = setTimeout(function() {
        t.container.classList.add("no-dropdown-transition")
    }, 50),
    this.container.classList.remove("dropdown-active"),
    this.activeDropdown = undefined)
}

globalNavDropdowns.prototype.toggleDropdown = function(t) {
    this.activeDropdown === t ? this.closeDropdown() : this.openDropdown(t)
}

globalNavDropdowns.prototype.startCloseTimeout = function() {
    var t = this;
    t.closeDropdownTimeout = setTimeout(function() {
        t.closeDropdown()
    }, 50)
}
,
globalNavDropdowns.prototype.stopCloseTimeout = function() {
    var t = this;
    clearTimeout(t.closeDropdownTimeout)
}

Strut.ready(function() {
    new globalNavDropdowns(".desktop-menu")
})
