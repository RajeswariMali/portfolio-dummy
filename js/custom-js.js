$('.steps-slider-wrapper.slick-carousel').slick({
    arrows:false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    loop: true,
    autoplay: false,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  // video play stop
  const videos = document.querySelectorAll("video");

        function startPreview(videoElement) {
            videoElement.muted = true;
            videoElement.currentTime =  1;
            videoElement.playbackRate =  0.5;
            videoElement.play();
        }

        function stopPreview(videoElement) {
            const currentSource = videoElement.currentSrc;
            videoElement.removeAttribute('src');
            videoElement.load();
            videoElement.src = currentSource;
            videoElement.currentTime =  0;
            videoElement.playbackRate =  1;
            videoElement.pause();
        }

        videos.forEach((video) => {
            let previewTimeout = null;

            video.addEventListener("mouseenter", () => {
                startPreview(video);
                previewTimeout = setTimeout(() => stopPreview(video),  4000);
            });

            video.addEventListener("mouseleave", () => {
                clearTimeout(previewTimeout);
                previewTimeout = null;
                stopPreview(video);
            });
        });

// mobile menu 
$(document).ready(function(){
  $(".menubar").click(function(){
    $("#menus").addClass("active");
    $("#overlay").addClass("active")
  });
});
// close menu
$(document).ready(function(){
  $(".close-btn").click(function(){
    $("#menus").removeClass("active");
    $("#overlay").removeClass("active")
  });
});
