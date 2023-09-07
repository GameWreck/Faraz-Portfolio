!function(o){"use strict";var e={m:function(o){e.d(),e.methods()},d:function(e){this._window=o(window),this._document=o(document),this._body=o("body"),this._html=o("html")},methods:function(o){e.featherAtcivation(),e.backToTopInit(),e.mobileMenuActive(),e.vedioActivation(),e.stickyHeader(),e.smothScroll(),e.smothScroll_Two(),e.stickyAdjust(),e.testimonialActivation(),e.contactForm(),e.wowActive(),e.awsActivation(),e.demoActive(),e.activePopupDemo(),e.onePageNav()},activePopupDemo:function(e){o(".popuptab-area li a.demo-dark").on("click",(function(e){o(".demo-modal-area").addClass("dark-version"),o(".demo-modal-area").removeClass("white-version")})),o(".popuptab-area li a.demo-light").on("click",(function(e){o(".demo-modal-area").removeClass("dark-version"),o(".demo-modal-area").addClass("white-version")}))},demoActive:function(e){o(".rn-right-demo").on("click",(function(e){o(".demo-modal-area").addClass("open")})),o(".demo-close-btn").on("click",(function(e){o(".demo-modal-area").removeClass("open")}))},contactForm:function(){o(".rwt-dynamic-form").on("submit",(function(e){e.preventDefault();var t=o(this);t.closest("input,textarea");t.closest("div").find("input,textarea").removeAttr("style"),t.find(".error-msg").remove(),t.closest("div").find('button[type="submit"]').attr("disabled","disabled");var s=o(this).serialize();o.ajax({url:"mail.php",type:"post",dataType:"json",data:s,success:function(e){t.closest("div").find('button[type="submit"]').removeAttr("disabled"),0==e.code?(t.closest("div").find('[name="'+e.field+'"]'),t.find(".rn-btn").after('<div class="error-msg"><p>*'+e.err+"</p></div>")):(o(".error-msg").hide(),o(".form-group").removeClass("focused"),t.find(".rn-btn").after('<div class="success-msg"><p>'+e.success+"</p></div>"),t.closest("div").find("input,textarea").val(""),setTimeout((function(){o(".success-msg").fadeOut("slow")}),5e3))}})}))},wowActive:function(){(new WOW).init()},smothScroll:function(){o(document).on("click",".smoth-animation",(function(e){e.preventDefault(),o("html, body").animate({scrollTop:o(o.attr(this,"href")).offset().top-50},300)}))},smothScroll_Two:function(){o(document).on("click",".smoth-animation-two",(function(e){e.preventDefault(),o("html, body").animate({scrollTop:o(o.attr(this,"href")).offset().top-0},300)}))},stickyAdjust:function(e){o(".rbt-sticky-top-adjust").css({top:120}),o(".rbt-sticky-top-adjust-two").css({top:200}),o(".rbt-sticky-top-adjust-three").css({top:25})},testimonialActivation:function(){o(".testimonial-activation").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0,adaptiveHeight:!0,cssEase:"linear",prevArrow:'<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',nextArrow:'<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'}),o(".testimonial-item-one").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0,adaptiveHeight:!0,cssEase:"linear",prevArrow:'<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',nextArrow:'<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',responsive:[{breakpoint:1200,settings:{arrows:!1}}]}),o(".portfolio-slick-activation").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!1,arrows:!0,cssEase:"linear",adaptiveHeight:!0,prevArrow:'<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',nextArrow:'<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',responsive:[{breakpoint:1124,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:868,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),o(".blog-slick-activation").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!1,arrows:!0,cssEase:"linear",adaptiveHeight:!0,prevArrow:'<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',nextArrow:'<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',responsive:[{breakpoint:1124,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:868,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),o(".testimonial-activation-item-3").slick({arrows:!0,dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,adaptiveHeight:!0,prevArrow:'<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',nextArrow:'<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',responsive:[{breakpoint:1124,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:577,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),o(".brand-activation-item-5").slick({arrows:!0,dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,adaptiveHeight:!0,prevArrow:'<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',nextArrow:'<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',responsive:[{breakpoint:1124,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:868,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})},featherAtcivation:function(){feather.replace()},backToTopInit:function(){var e=o(".backto-top");o(window).scroll((function(){o(this).scrollTop()>100?o(e).css("opacity","1"):o(e).css("opacity","0")})),o(e).on("click",(function(){return o("html, body").animate({scrollTop:0,easingType:"linear"},500),!1}))},stickyHeader:function(e){o(window).scroll((function(){o(this).scrollTop()>250?o(".header--sticky").addClass("sticky"):o(".header--sticky").removeClass("sticky")}))},vedioActivation:function(e){function t(){o(".video-overlay.open").removeClass("open").find("iframe").remove()}o("#play-video, .play-video").on("click",(function(e){e.preventDefault(),o("#video-overlay, .video-overlay").addClass("open"),o("#video-overlay, .video-overlay").append('<iframe width="80%" height="80%" src="https://www.youtube.com/embed/7e90gBu4pas" frameborder="0" allowfullscreen></iframe>')})),o(".video-overlay, .video-overlay-close").on("click",(function(o){o.preventDefault(),t()})),o(document).keyup((function(o){27===o.keyCode&&t()}))},mobileMenuActive:function(t){o(".humberger-menu").on("click",(function(t){t.preventDefault(),o(".popup-mobile-menu").addClass("menu-open"),e._html.css({overflow:"hidden"})})),o(".close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a").on("click",(function(t){t.preventDefault(),o(".popup-mobile-menu").removeClass("menu-open"),o(".popup-mobile-menu .has-droupdown > a").removeClass("open").siblings(".submenu").removeClass("active").slideUp("400"),e._html.css({overflow:""})})),o(".popup-mobile-menu").on("click",(function(t){t.target===this&&o(".popup-mobile-menu").removeClass("menu-open"),e._html.css({overflow:""})})),o(".popup-mobile-menu .has-droupdown > a").on("click",(function(t){t.preventDefault(),o(this).siblings(".submenu").toggleClass("active").slideToggle("400"),o(this).toggleClass("open"),e._html.css({overflow:""})})),o(".nav-pills .nav-link").on("click",(function(t){o(".rn-popup-mobile-menu").removeClass("menu-open"),e._html.css({overflow:""})}))},awsActivation:function(o){AOS.init()},onePageNav:function(){o(".onepagenav").onePageNav({currentClass:"current",changeHash:!0,scrollSpeed:500,scrollThreshold:.2,filter:":not(.external)",easing:"swing"})}};e.m()}(jQuery,window);