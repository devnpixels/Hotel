
window.onload =()=>{
    makeHostelSwiper()
}
// window.onresize =()=>{
//   makeHostelSwiper()
// }



const makeHostelSwiper =()=>{
  var delay = 3500
  var hostel_swiper_1 = new Swiper(".hs1", {
    loop:true,
    speed: 1500,
    autoplay:{
      delay:delay
    },
  });
  var hostel_swiper_2 = new Swiper(".hs2", {
    loop:true,
    speed: 1500,
    autoplay:{
      delay:delay
    },
  });
  var hostel_swiper_3 = new Swiper(".hs3", {
    loop:true,
    speed: 1500,
    autoplay:{
      delay:delay
    },
  });

  var hostel_info_swiper = new Swiper(".info_swiper", {
    direction:'vertical',
    loop:true,
    speed: 1500,
  });
  buildInfoSwiperAnime(hostel_info_swiper)

  hostel_swiper_1.on('slideChange', function () {
    hostel_swiper_2.autoplay.start();
    hostel_swiper_3.autoplay.stop();
    hostel_info_swiper.slideNext()
  });

  hostel_swiper_2.on('slideChange', function () {
    hostel_swiper_1.autoplay.stop();
    hostel_swiper_3.autoplay.start();
    hostel_info_swiper.slideNext()
  });

  hostel_swiper_3.on('slideChange', function () {
    hostel_swiper_2.autoplay.stop();
    hostel_swiper_1.autoplay.start();
    hostel_info_swiper.slideNext()
  });
}  


const buildInfoSwiperAnime =(hostel_info_swiper)=>{
  hostel_info_swiper.on('slideNextTransitionStart',()=>{
    const info_swiper_slide = document.querySelectorAll('.info_swiper_slide')
    info_swiper_slide.forEach((swiper_slide,swiper_i)=>{
      if(swiper_slide.classList.contains('swiper-slide-active')){
        swiper_slide.childNodes[1].innerHTML =
        swiper_slide.childNodes[1].innerHTML.split('').map((span)=>{
          if(span === ' '){
            span = '&nbsp;'
          }
          return `<span class='ins_span'>${span}</span>`
        }).join('')
        animeInsSpan(swiper_slide)
      }
    })
  })
}

const animeInsSpan =(swiper_slide)=>{
  let ins_span = document.querySelectorAll('.ins_span')
  ins_span.forEach((s,si)=>{
    anime({
      targets: s,
      translateY: [-30,0],
      opacity: [0,1],
      delay : 500 + ( 5 * si),
      duration: 1000,
      complete: ()=>{
        let info_spans = ['Relax and unwind','Escape', 'Discover']
        swiper_slide.childNodes[1].innerHTML = info_spans[swiper_slide.dataset.id]
      }
    });
  })
}