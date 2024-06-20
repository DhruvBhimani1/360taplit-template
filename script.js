var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: '.next-btn ',
        prevEl: '.prev-btn', },
        spaceBetween: 30,
    breakpoints: {
            320: {
              slidesPerView: 1
            }, 
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }
  });

    var swiper = new Swiper(".mySwiperfirst", {
      slidesPerView: 6,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView : 6
        }
      }
    });
 

