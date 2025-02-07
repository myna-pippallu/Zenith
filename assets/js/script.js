// scoller 


$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#body-scroll").addClass("scrolled");
  } else {
    $("#body-scroll").removeClass("scrolled");
  }
});

function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
}

var $slickEl = $(".center");
var $slickE2 = $(".logocenter");

// testimonial section 

$slickEl.slick({
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToScroll: 3,
  infinite: true,

  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// logos section 

$slickE2.slick({
  centerMode: false,
  slidesToShow: 5,
  focusOnSelect: true,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToScroll: 1,
  infinite: true,

  responsive: [
    {
      breakpoint: 1649.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1199.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768.98,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480.98,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// counter 

let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    counterup();
  }, 30);
});

