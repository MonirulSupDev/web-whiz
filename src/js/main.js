(function ($) {
    "use strict";

    var windowOn = $(window);

    // Preloader
    windowOn.on("load", function () {
        $("#pageLoader").fadeOut(500);
    });

    // Back to Top--->>
    // Show/hide button on scroll
    windowOn.on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $("#backToTop")
                .removeClass("translate-y-20 opacity-0 pointer-events-none")
                .addClass("opacity-100 translate-y-0");
        } else {
            $("#backToTop")
                .removeClass("opacity-100 translate-y-0")
                .addClass("translate-y-20 opacity-0 pointer-events-none");
        }
    });

    // Scroll smoothly to top
    $("#backToTop").on("click", function () {
        $("html, body").animate(
            {
                scrollTop: 0
            },
            800,
            "swing"
        );
    });

    // Offcanvas--->>
    $("#offcanvasBtn").click(function () {
        $("#offcanvas")
            .removeClass("translate-x-full")
            .addClass("translate-x-0");

        $("#overlay").removeClass("hidden");
    });

    $("#closeBtn, #overlay").click(function () {
        $("#offcanvas")
            .removeClass("translate-x-0")
            .addClass("translate-x-full");

        $("#overlay").addClass("hidden");
    });

    // Sticky header--->>
    windowOn.on('scroll', function () {
        var scroll = windowOn.scrollTop();
        if (scroll < 100) {
            $("#sticky-header").removeClass("fixed header-fixed");
            $("#sticky-header").addClass("absolute bg-transparent");
            $("#sticky-header-2").removeClass("fixed header-fixed-2");
            $("#sticky-header-2").addClass("absolute bg-transparent");
        } else {
            $("#sticky-header").addClass("fixed header-fixed");
            $("#sticky-header").removeClass("absolute bg-transparent");
            $("#sticky-header-2").addClass("fixed header-fixed-2");
            $("#sticky-header-2").removeClass("absolute bg-transparent");
        }
    });

    // Element observer--->>
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const element = entry.target;
                const animation = element.dataset.animation;

                if (animation) {
                    element.classList.add(`animate-${animation}`);
                }

                observer.unobserve(element);
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.observe(element);
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.observe(element);
    });

    // Fancybox for popup images/videos--->>
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    // For adding background image--->>
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
    })

    // Accordion(FAQ)--->>
    const accordionButtons = document.querySelectorAll(".accordion-btn");

    accordionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector(".accordion-icon");

            const isOpen = content.classList.contains("grid-rows-[1fr]");

            // Close all
            document.querySelectorAll(".accordion-content").forEach((item) => {
                item.classList.remove("grid-rows-[1fr]");
                item.classList.add("grid-rows-[0fr]");
            });

            document.querySelectorAll(".accordion-icon").forEach((item) => {
                item.classList.remove("rotate-45");
            });

            // Open clicked item
            if (!isOpen) {
                content.classList.remove("grid-rows-[0fr]");
                content.classList.add("grid-rows-[1fr]");

                icon.classList.add("rotate-45");
            }
        });
    });

    // Portfolio preview Tab--->>
    const $tabs = $(".portfolio-tab");
    const $portfolioItems = $(".portfolio-item");

    $tabs.on("click", function () {

        // Remove active class from all tabs
        $tabs.removeClass("active");

        // Add active class to clicked tab
        $(this).addClass("active");

        // Get filter value
        const filter = $(this).data("filter");

        $portfolioItems.each(function () {

            if (filter === "all") {
                $(this).show();
                return;
            }

            const category = $(this).data("category");

            if (category.includes(filter)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Project slider Home 01
    var swiper = new Swiper('.projectSwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 700,
        grabCursor: true,
        breakpoints: {
            375: {
                slidesPerView: 1.3,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 2.5,
                spaceBetween: 50,
            },
        },
    });

    // Award Project slider- Portfolio page
    var swiper = new Swiper('.awardProjectSwiper', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 16,

        breakpoints: {
            768: {
                spaceBetween: 32,
            },

            1200: {
                spaceBetween: 44,
            },
        },

        loop: true,
        speed: 700,
        grabCursor: true,
    });

    // Testimonial slider
    var swiper = new Swiper('.testimonial-active', {
        loop: true,
        speed: 700,
        navigation: {
            nextEl: '.testimonial-button-next',
            prevEl: '.testimonial-button-prev',
        },
    });

})(jQuery);